import { Router } from "express";
import { addRacipe, getAllRacipe, getCategoryRacipes } from "../controllers/racipe.js";

const router = Router();

router.post('/', addRacipe);
router.get('/', getAllRacipe);
router.get('/:category', getCategoryRacipes);


export default router;