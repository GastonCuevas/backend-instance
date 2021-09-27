const BaseService = require('./base.service');
let _ideaRepository = null;
const { ErrorManager } = require('../errors');

class IdeaService extends BaseService {

    constructor({IdeaRepository}){
        super(IdeaRepository);
        _ideaRepository = IdeaRepository
    }

    async getUserIdeas(author) {
        ErrorManager.validAuthor(author);
        return await _ideaRepository.getUserIdeas(author);
    }

    async upvoteIdea(ideaId) {
        ErrorManager.validIdea(ideaId);

        const idea = await _ideaRepository.get(ideaId);
        ErrorManager.existIdea(idea);

        idea.upvotes.push(true);

        return await _ideaRepository.update(ideaId, { upvotes: idea.upvotes });
    }

    async downvoteIdea(ideaId) {
        ErrorManager.validIdea(ideaId);

        const idea = await _ideaRepository.get(ideaId);
        ErrorManager.existIdea(idea);

        idea.downvotes.push(true);

        return await _ideaRepository.update(ideaId, { upvotes: idea.downvotes });
    }
}

module.exports = IdeaService;