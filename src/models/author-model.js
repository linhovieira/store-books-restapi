import * as mongoose from 'mongoose';

const authorSchema = new mongoose.Schema({
    id: { type: mongoose.Schema.Types.ObjectId },
    name: { type: String, required: true },
    nationality: {type: String, required: true}
}, {
    versionKey: false
});

const authorModel = mongoose.model('author', authorSchema);

export {authorModel, authorSchema};