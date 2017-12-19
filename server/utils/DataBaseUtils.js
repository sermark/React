import mongoose from 'mongoose';

import '../models/note';
import config from '../../etc/config.json';

const Note = mongoose.model('Note');

export function setUpConnection() {
    mongoose.connect('mongodb://'+config.db.host+':'+config.db.port+'/'+config.db.name);
}

//note

export function listNotes(id) {
    return Note.find();
}

export function createNote(data) {
    const note = new Note({
        text: data.text,
        date: data.date,
        completed: data.completed,
    });
    return note.save();
}

export function updateNote(data) {
    return Note.findById(data._id).update({
        text: data.text,
        date: data.date,
        completed: data.completed,
    });
}

export function deleteNote(id) {
    return Note.findById(id).remove();
}

export function getNote(id) {
    return Note.findById(id);
}
