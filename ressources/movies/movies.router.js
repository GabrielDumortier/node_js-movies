import {Router} from 'express';
import {list, getById, updateMovie, createMovie, deleteMovie, search} from './movies.controller';

const moviesRouter = Router();


moviesRouter
    .route('/')
    .get(list)
    .post(createMovie)
    // le / indique qu'on est a /api/movies/

moviesRouter
    .route('/search')
    .get(search)

// id a la fin, priorité dans les chemin, d'abord sans parametres puis avec params
moviesRouter    
    .route('/:id')
    .delete(deleteMovie)
    .get(getById)
    .put(updateMovie)



export default moviesRouter;