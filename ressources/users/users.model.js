import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    firstname: {
        type: String,
        maxLength: 50
    },
    lastname: {
        type: String
    }, 
    email: {
        type: String
    }

});

export const Users = mongoose.model('clients', userSchema);