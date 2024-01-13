import {authorModel} from '../models/author-model.js';

class AuthorController {
    static async getItems(req, res) {
        const collections = await authorModel.find({}, undefined, undefined);
        res.status(200).json(collections);
    }
    static async getItemById(req, res) {
        try {
            const id = req.params.id;
            const collection = await authorModel.findById(id, undefined, undefined);
            res.status(200).json(collection);
        } catch (error) {
            res.status(500).json({message: error.message});
        }
    }
    static async postItem(req, res) {
        let collection = req.body;
        try {
            collection = await authorModel.create(collection, undefined);
            res.status(201).json(collection);
        } catch (error) {
            res.status(500).json({message: error.message});
        }
    }
    static async putItemById(req, res) {
        try {
            const id = req.params.id;
            let collection = req.body;
            await authorModel.findByIdAndUpdate(id, collection, undefined);
            res.status(200).send('Item atualizado com sucesso!');
        } catch (error) {
            res.status(500).json({message: error.message});
        }
    }
    static async deleteItemById(req, res) {
        try {
            const id = req.params.id;
            await authorModel.findByIdAndDelete(id, undefined);
            res.status(204).send();
        } catch (error) {
            res.status(500).json({message: error.message});
        }
    }
}

export default AuthorController;