import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const NoteSchema = new Schema({
    text: {type: String, required: true},
    date: {type: String},
    completed: {type: Boolean},
});

const Note = mongoose.model('Note', NoteSchema);