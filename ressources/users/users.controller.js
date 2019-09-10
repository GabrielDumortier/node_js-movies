import { Users } from './users.model';

export const listUser = async (req, res) => {
    try{    
        const users = await Users.find().limit(50);
        if(!users) res.status(400).end();
        res.status(200).json(users);
        // console.log(users);
    }catch(err) {
        console.log(err);
        res.status(400).end();
    }
}

export const getByIdUser = async (req, res) => {
    try{    
        const users = await Users.findOne({_id:req.params.id});
        if(!users) res.status(400).end();
        res.status(200).json(users);
        // console.log(users);
    }catch(err) {
        console.log(err);
        res.status(400).end();
    }
}

export const updateUser = async (req, res) => {
    try{
        const updatedUser = await Users.findOneAndUpdate({
            _id:req.params.id  // trouve moi quelqu'un avec l'id que je t'ai donné
        }, 
        req.body, // met a jour req.body
        {new:true} // par défaut tu écrases ce qu'il y a 
        );

        if(!updatedUser) {
            res.status(400).end();
        } else {
            res.status(201).json({users:updatedUser});
        }
        
    }catch(err) {
        console.log(err);
        res.status(400).end();
    }
}

export const createUser = async (req, res) => {
    try{
        const user = await Users.create({...req.body});
        res.status(201).json({user});
    }catch(err){
        console.log(err);
        res.status(400).end();
    }
}

export const deleteUser = async (req, res) => {
    try{
        const deletedUser = await Users.findOneAndDelete({_id:req.params.id});

        if(!deletedUser) {
            res.status(400).end();
        } else {
            res.status(201).json({users:deletedUser});
        }

    }catch(err) {
        console.log(err);
        res.status(400).end();
    }
}
