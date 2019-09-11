import express from 'express';
import {connect} from './utils/db';
import {json, urlencoded} from 'body-parser';
import jwt from 'jsonwebtoken';
import moviesRouter from './ressources/movies/movies.router';
import usersRouter from './ressources/users/users.router';
import loginRouter from './ressources/login/login.router';
const app = express();

app.disable('x-powered-by'); //cache le langage
app.use(json());
app.use(urlencoded({extended:true}));
app.use('/api/movies', moviesRouter); // url de base qu'on recherche. Va chercher la suite dans moviesRouter
app.use('/api/users', usersRouter);
app.use('/api/login', loginRouter);

const start = async () => {
    try{
        await connect();
        app.listen(8001, () => {
            console.log('REST API is listening on port 8001');
        });
    }catch(err) {
        throw err;
    }
}
start();