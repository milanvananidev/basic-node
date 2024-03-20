import mongoose from "mongoose";

const schema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please provide category name'],
        unique: [true, 'Category already exists']
    }
});

export default mongoose.model('category', schema) 