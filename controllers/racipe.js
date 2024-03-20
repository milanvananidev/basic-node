import RacipeModal from '../models/racipe.js'


export const addRacipe = async (req, res, next) => {
    const { type, title, category, ingredients, steps } = req.body;

    try {
        let createdRacipe = await RacipeModal.create({ type, title, category, ingredients, steps });

        return res.status(200).json({
            success: true,
            racipe: createdRacipe
        })
    } catch (error) {
        return res.status(500).json({
            success: true,
            message: error.message || 'Internal server error'
        })
    }
}

export const getAllRacipe = async (req, res, next) => {
    try {
        let allRacipes = await RacipeModal.find({});

        return res.status(200).json({
            success: true,
            racipes: allRacipes
        })
    } catch (error) {
        return res.status(500).json({
            success: true,
            message: error.message || 'Internal server error'
        })
    }
}

export const getCategoryRacipes = async (req, res, next) => {

    const { category } = req.params;

    try {

        const racipes = await RacipeModal.find({ category });

        return res.status(200).json({
            success: true,
            racipes
        })

    } catch (error) {
        return res.status(500).json({
            success: true,
            message: error.message || 'Internal server error'
        })
    }
}