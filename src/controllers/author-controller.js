import {authorModel} from '../models/author-model.js';
import NotFoundError from "../errors/not-found-error.js";

class AuthorController {
    static async getItems(req, res, next) {
        try {
            const collections = await authorModel.find({}, undefined, undefined);
            res.status(200).json(collections);
        } catch (error) {
            next(error);
        }
    }
    static async getItemById(req, res, next) {
        try {
            const id = req.params.id;
            const collection = await authorModel.findById(id, undefined, undefined);
            if (!collection) {
                next(new NotFoundError(`Nenhum autor pode ser localizado com id: ${id}`));
            }
            res.status(200).json(collection);
        } catch (error) {
            next(error);
        }
    }
    static async postItem(req, res, next) {
        let collection = req.body;
        try {
            collection = await authorModel.create(collection, undefined);
            res.status(201).json(collection);
        } catch (error) {
            next(error);
        }
    }
    static async putItemById(req, res, next) {
        try {
            const id = req.params.id;
            let collection = req.body;
            await authorModel.findByIdAndUpdate(id, collection, undefined);
            res.status(200).send('Item atualizado com sucesso!');
        } catch (error) {
            next(error);
        }
    }
    static async deleteItemById(req, res, next) {
        try {
            const id = req.params.id;
            await authorModel.findByIdAndDelete(id, undefined);
            res.status(204).send();
        } catch (error) {
            next(error);
        }
    }
}

export default AuthorController;