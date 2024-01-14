import BaseError from "./base-error.js";

class InvalidRequest extends BaseError {
    constructor() {
        super(400, 'Verifique os dados fornecido para essa requisição!');
    }
}

export default InvalidRequest;