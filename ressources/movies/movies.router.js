import {Router} from 'express';
import {list, getById, updateMovie, createMovie, deleteMovie} from './movies.controller';

const moviesRouter = Router();

moviesRouter
    .route('/')
    .get(list)
    // le / indique qu'on est a /api/movies/

moviesRouter    
    .route('/:id')
    .get(getById)

moviesRouter    
    .route('/:id')
    .put(updateMovie)

moviesRouter   
    .route('/')
    .get(list)
    .post(createMovie)

moviesRouter    
    .route('/:id')
    .delete(deleteMovie)

export default moviesRouter;