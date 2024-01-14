import NotFoundError from '../errors/not-found-error.js';

function listenerError404(error, req, res, next) {
    const error404 = new NotFoundError();
    next(error404);
}

export default listenerError404;