import * as mongoose from 'mongoose';

const authorSchema = new mongoose.Schema({
    id: { type: mongoose.Schema.Types.ObjectId },
    name: { type: String, required: [true, 'O atributo nome é requerido!'] },
    nationality: {type: String, required: [true, 'O atributo nacionalidade é requerido!']}
}, {
    versionKey: false
});

const authorModel = mongoose.model('author', authorSchema);

export {authorModel, authorSchema};