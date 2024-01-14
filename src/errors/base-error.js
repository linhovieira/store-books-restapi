class BaseError extends Error {
    constructor(status = 500, message = 'Ocorreu um erro interno no servidor!') {
        super();
        this.status = status;
        this.message = message;
    }

    sendResponse(res) {
        const response = { status: this.status, message: this.message };
        res.status(this.status).send(response);
    }
}

export default BaseError;