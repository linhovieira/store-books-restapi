import * as mongoose from 'mongoose';
import {authorSchema} from './author-model.js';

const bookSchema = new mongoose.Schema({
    id: { type: mongoose.Schema.Types.ObjectId },
    title: { type: String, required: true },
    cover: { type: String },
    price: { type: Number, required: true },
    pages: { type: Number, required: true },
    author: authorSchema
}, {
    versionKey: false
});

const bookModel = mongoose.model('books', bookSchema);

export default bookModel;