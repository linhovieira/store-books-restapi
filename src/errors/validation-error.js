import BaseError from './base-error.js';

class ValidationError extends BaseError {
    constructor(error) {
        const fieldMessages = Object.values(error.errors).map(error => error.message).join('; ');
        super(400, `Os seguintes erros foram detectados: ${fieldMessages}`);
    }
}

export default ValidationError;