import { Router } from "express";
import {getFotoPosts} from "../controllers/fotoPosts.controller.js";

const router = Router();

// http://localhost:3000/api/foto-posts?page=1&limit=10
/**
 * @swagger
 * /api/foto-posts:
 *  get:
 *      summary: obtienes todas las fotos
 *      tags:
 *       - Posts
 *      responses:
 *          200:
 *              description: listado de todas las fotos de los usuarios
 */
router.get('/foto-posts',getFotoPosts);

export default router;