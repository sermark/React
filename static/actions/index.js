import api from '../api';

export const fetchNotes = () => {
    return function thunk (dispatch) {
        return api.listNotes().then( ({data}) => {
            dispatch(fetchNotesSuccess(data))
        }).catch((err) => {
            console.warn(err);
        });
    }
}

export const fetchNotesSuccess = (payload) => {
    return {
        type: 'FETCH_NOTES_SUCCESS',
        payload,
    }
}

export const addNote = (payload) => {
    return function thunk (dispatch) {
        return api.createNote(payload).then(() => {
            dispatch(fetchNotes());
        }).catch((err) => {
            console.warn(err);
        })
    }
}

export const deleteNote = (payload) => {
    const noteId = payload._id;
    return function thunk (dispatch) {
        return api.deleteNote(noteId).then(() => {
            dispatch(fetchNotes());
        }).catch((err) => {
            console.warn(err);
        })
    }
}

export const updateNote = (payload) => {
    return function thunk (dispatch) {
        return api.updateNote(payload).then(() => {
            dispatch(fetchNotes());
        }).catch((err) => {
            console.warn(err);
        })
    }
}

export const sortTodo = sortFilter => {
    return {
        type: 'SET_SORT',
        sortFilter,
    }
}

export const setVisibilityFilter = visibilityFilter => {
    return {
        type: 'SET_VISIBILITY_FILTER',
        visibilityFilter,
    }
}
