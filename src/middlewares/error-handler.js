import mongoose from "mongoose";
import BaseError from "../errors/base-error.js";
import InvalidRequest from "../errors/invalid-request.js";
import ValidationError from "../errors/validation-error.js";
import NotFoundError from "../errors/not-found-error.js";

function listenerErrors(error, req, res, next) {
    if (error instanceof mongoose.Error.CastError) {
        new InvalidRequest().sendResponse(res);
    } else if (error instanceof mongoose.Error.ValidationError) {
        new ValidationError(error).sendResponse(res);
    } else if (error instanceof NotFoundError) {
        error.sendResponse(res);
    } else {
        new BaseError().sendResponse(res);
    }
}

export default listenerErrors;