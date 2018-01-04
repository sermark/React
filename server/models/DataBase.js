import mongoose from 'mongoose';
import './note';
import config from '../etc/config.json'

const Note = mongoose.model('Note');

export function setUpConnection() {
    mongoose.connect('mongodb://'+config.db.host+':'+config.db.port+'/'+config.db.name);
}

export function createNote(data) {
	const note = new Note({
		title: data.title,
	});
	return note.save();
}