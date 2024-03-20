import CategoryModel from '../models/category.js'

export const addCategory = async (req, res, next) => {
    const { name } = req.body;

    try {
        await CategoryModel.create({name});

        return res.status(201).json({
            success: true,
            message: `${name} category created successfully`
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message || 'Internal server error'
        })
    }
}

export const getAllCategories = async (req, res, next) => {
    try {
        const allCategories = await CategoryModel.find({});

        return res.status(200).json({
            success: true,
            categories: allCategories
        })
        
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message || 'Internal server error'
        })
    }
}