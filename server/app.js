import { serverPort } from '../etc/config.json';
import express from 'express';
import * as db from './DataBase';

db.setUpConnection();

const app = express();

const server = app.listen(serverPort, () => {
    console.log('I am server on '+ serverPort);
});

app.post('/notes', (req, res) => {
    db.createNote(req.body).then(data => res.send(data));
});
