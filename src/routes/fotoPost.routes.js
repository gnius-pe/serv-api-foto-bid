import { Router } from "express";
import {getFotoPosts} from "../controllers/fotoPosts.controller.js";

const router = Router();

router.get('/foto-posts',getFotoPosts);

export default router;