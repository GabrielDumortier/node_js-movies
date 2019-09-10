import {Router} from 'express';
import {listUser, getByIdUser, updateUser, createUser, deleteUser} from './users.controller';

const usersRouter = Router();

usersRouter
    .route('/')
    .get(listUser)
    .post(createUser)
    // le / indique qu'on est a /api/movies/

// id a la fin, priorité dans les chemin, d'abord sans parametres puis avec params
usersRouter    
    .route('/:id')
    .delete(deleteUser)
    .get(getByIdUser)
    .put(updateUser)



export default usersRouter;