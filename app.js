import express from 'express';
import {connect} from './utils/db';
import {json, urlencoded} from 'body-parser';
import moviesRouter from './ressources/movies/movies.router';
const app = express();

app.disable('x-powered-by'); //cache le langage
app.use(json());
app.use(urlencoded({extended:true}));
app.use('/api/movies', moviesRouter); // url de base qu'on recherche. Va chercher la suite dans moviesRouter

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