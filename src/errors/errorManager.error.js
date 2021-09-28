class ErrorManager {
    validAuthor(author){
        if(!author){
            const error = new Error();
            error.status = 400;
            error.message = "UserId must be send";
            throw error;
        }
    }

    validIdea(ideaId){
        if(!ideaId){
            const error = new Error();
            error.status = 400;
            error.message = "IdeaId must be send";
            throw error;
        }
    }

    existIdea(idea){
        if(!idea){
            const error = new Error();
            error.status = 404;
            error.message = "Idea does not exist";
            throw error;
        }
    }
}

module.exports = ErrorManager;