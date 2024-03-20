import mongoose from "mongoose";

const schema = new mongoose.Schema({
    type: {
        type: String,
        enum: {
            values: ["veg", "non-veg"],
        },
        required: [true, 'Please provide type of racipe']
    },
    title: {
        type: String,
        required: [true, 'Please provide racipe title'],
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'category',
        required: true
    },
    ingredients: {
        type: Array,
        required: [true, 'Please provide racipe ingredients'],
    },
    steps: {
        type: Array,
        required: [true, 'Please provide steps of racipe']
    }
}, { timestamps: true });

export default mongoose.model('racipe', schema)