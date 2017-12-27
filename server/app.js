import express from 'express';
import bodyParser from 'body-parser';
import { serverPort } from '../etc/config.json';
import cors from 'cors';

import * as db from './utils/DataBaseUtils';

db.setUpConnection();

const app = express();

app.use( bodyParser.json() );

app.use(cors({ origin: '*' }));

app.get('/todolist', (req, res) => {
    db.listNotes().then(data => {
        res.send(data);
    });
});

app.get('/todolist/:id', (req, res) => {
    db.getNote(req.params.id).then(data => {
        res.send(data);
    });
});

app.post('/todolist', (req, res) => {
    db.createNote(req.body).then(data => res.send(data));
});

app.delete('/todolist/:id', (req, res) => {
    db.deleteNote(req.params.id).then(data => res.send(data));
});

app.put('/todolist/:id', (req, res) => {
    db.updateNote(req.body).then(data => res.send(data));
});

const server = app.listen(serverPort, () => {
    console.log('I am server on '+ serverPort);
});
