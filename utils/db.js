import mongoose from 'mongoose';

export const connect = (url='mongodb://localhost:27017/technocite', opts={}) => {
    console.log('Connecting to database…')
    return mongoose.connect(
        url,
        {...opts, useNewUrlParser:true, useUnifiedTopology: true}
    )
};