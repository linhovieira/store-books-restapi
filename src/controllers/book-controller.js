import bookModel from '../models/book-model.js';
import {authorModel} from '../models/author-model.js';

class BookController {
    static async getItems(req, res) {
        let collections = [];
        const query = req.query.q;
        if (query) {
            collections = await bookModel.find({title: query}, undefined, undefined);
        } else {
            collections = await bookModel.find({}, undefined, undefined);
        }
        res.status(200).json(collections);
    }
    static async getItemById(req, res) {
        try {
            const id = req.params.id;
            const collection = await bookModel.findById(id, undefined, undefined);
            res.status(200).json(collection);
        } catch (error) {
            res.status(500).json({message: error.message});
        }
    }
    static async postItem(req, res) {
        let collection = req.body;
        const authorId = collection['authorId'];
        try {
            if (authorId) {
                const author = await authorModel.findById(authorId, undefined, undefined);
                collection = { ... collection, author: author};
            }
            const collectionSaved = await bookModel.create(collection, undefined);
            res.status(201).json(collectionSaved);
        } catch (error) {
            res.status(500).json({message: error.message});
        }
    }
    static async putItemById(req, res) {
        const id = req.params.id;
        let collection = req.body;
        const authorId = collection['authorId'];
        try {
            if (authorId) {
                const existentCollection = await bookModel.findById(id, undefined, undefined);
                if (!existentCollection) {
                    res.status(400).json({message: `Não possível localizar nenhum livro com id: ${id}`});
                }
                if (!existentCollection['author'] || existentCollection['author']['id'] !== authorId) {
                    const author = await authorModel.findById(authorId, undefined, undefined);
                    collection = { ... collection, author: author};
                }
            }
            await bookModel.findByIdAndUpdate(id, collection, undefined);
            res.status(200).send('Item atualizado com sucesso!');
        } catch (error) {
            res.status(500).json({message: error.message});
        }
    }
    static async deleteItemById(req, res) {
        try {
            const id = req.params.id;
            await bookModel.findByIdAndDelete(id, undefined);
            res.status(204).send();
        } catch (error) {
            res.status(500).json({message: error.message});
        }
    }
}

export default BookController;