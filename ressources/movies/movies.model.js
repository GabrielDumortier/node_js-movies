import mongoose from 'mongoose';

const movieSchema = new mongoose.Schema({
    fields: {
        title: {
            type: String,
            maxLength: 50
        },
        genres: {
            type: String
        }, 
        year: {
            type: Number
        }
    }
});

export const Movies = mongoose.model('movies', movieSchema);