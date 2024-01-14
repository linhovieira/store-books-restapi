import BaseError from "./base-error.js";

class NotFoundError extends BaseError {
    constructor(message = 'Recurso não encontrado!') {
        super(404, message);
    }
}

export default NotFoundError;