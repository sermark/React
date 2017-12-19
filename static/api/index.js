import axios from 'axios';

import { apiPrefix } from '../../etc/config.json';

export default {
    listNotes() {
        return axios.get(`${apiPrefix}/todolist`);
    },

    createNote(data) {
        return axios.post(`${apiPrefix}/todolist`, data);
    },

    deleteNote(noteId) {
        return axios.delete(`${apiPrefix}/todolist/${noteId}`);
    },    

    getNote(noteId) {
        return axios.get(`${apiPrefix}/todolist/${noteId}`);
    },

    updateNote(data) {
        return axios.put(`${apiPrefix}/todolist/${data._id}`, data);
    }
}
