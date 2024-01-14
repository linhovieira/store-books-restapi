import * as mongoose from 'mongoose';
import {authorSchema} from './author-model.js';

const bookSchema = new mongoose.Schema({
    id: { type: mongoose.Schema.Types.ObjectId },
    title: { type: String, required: [true, 'O atributo título é requerido!'] },
    cover: { type: String },
    price: { type: Number, required: [true, 'O atributo preço é requerido!'] },
    pages: { type: Number, required: [true, 'O atributo páginas é requerido!'] },
    author: authorSchema
}, {
    versionKey: false
});

const bookModel = mongoose.model('books', bookSchema);

export default bookModel;