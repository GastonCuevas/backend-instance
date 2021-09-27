const BaseService = require('./base.service');
let _commentRepository = null;
let _ideaRepository = null;
const { ErrorManager } = require('../errors');

class CommentService extends BaseService {
    constructor(CommentRepository, IdeaRepository) {
        super(CommentRepository);
        _commentRepository = CommentRepository;
        _ideaRepository = IdeaRepository;
    }

    async getIdeaComments(ideaId) {
        ErrorManager.validIdea(ideaId);
        const idea = await _ideaRepository.get(ideaId);
        ErrorManager.existIdea(idea);
        const { comments } = idea;
        return comments;
    }

    async createComment(comment, ideaId) {
        ErrorManager.validIdea(ideaId);
        const idea = await _ideaRepository.get(ideaId);
        ErrorManager.existIdea(idea);
        const createdComment = await _commentRepository.create(comment);
        idea.comments.push(createdComment);

        return await _ideaRepository.update(ideaId, { comments: idea.comments });
    }
}

module.exports = CommentService;