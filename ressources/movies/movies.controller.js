import { Movies } from './movies.model';

export const list = async (req, res) => {
    try{    
        const movies = await Movies.find().limit(50);
        if(!movies) res.status(400).end();
        res.status(200).json(movies);
        // console.log(movies);
    }catch(err) {
        console.log(err);
        res.status(400).end();
    }
}

export const getById = async (req, res) => {
    try{    
        const movies = await Movies.findOne({_id:req.params.id});
        if(!movies) res.status(400).end();
        res.status(200).json(movies);
        // console.log(movies);
    }catch(err) {
        console.log(err);
        res.status(400).end();
    }
}

export const updateMovie = async (req, res) => {
    try{
        const updatedMovie = await Movies.findOneAndUpdate({
            _id:req.params.id  // trouve moi quelqu'un avec l'id que je t'ai donné
        }, 
        req.body, // met a jour req.body
        {new:true} // par défaut tu écrases ce qu'il y a 
        );

        if(!updatedMovie) {
            res.status(400).end();
        } else {
            res.status(201).json({movies:updatedMovie});
        }
        
    }catch(err) {
        console.log(err);
        res.status(400).end();
    }
}

export const createMovie = async (req, res) => {
    try{
        const movie = await Movies.create({...req.body});
        res.status(201).json({movie});
    }catch(err){
        console.log(err);
        res.status(400).end();
    }
}

export const deleteMovie = async (req, res) => {
    try{
        const deletedMovie = await Movies.findOneAndDelete({_id:req.params.id});

        if(!deletedMovie) {
            res.status(400).end();
        } else {
            res.status(201).json({movies:deletedMovie});
        }

    }catch(err) {
        console.log(err);
        res.status(400).end();
    }
}
