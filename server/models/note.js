import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const NoteSchema = new Schema({
  title: {type: String} //type can be number, string, collection and etc. see mongoose
});

const Note = mongoose.model('Note', NoteSchema);