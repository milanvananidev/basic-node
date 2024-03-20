import { Router } from "express";
import { addRacipe, getAllRacipe, getCategoryRacipes, updateRacipe, deleteRacipe } from "../controllers/racipe.js";

const router = Router();

router.post('/', addRacipe);
router.get('/', getAllRacipe);
router.get('/:category', getCategoryRacipes);
router.put('/:racipe', updateRacipe);
router.delete('/:racipe', deleteRacipe)


export default router;