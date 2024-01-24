import { Router } from "express";
import {getFotoPosts} from "../controllers/fotoPosts.controller.js";

const router = Router();

// ejemplo http://localhost:3000/api/foto-posts?page=1&limit=10
/**
 * @swagger
 * /api/foto-posts:
 *  get:
 *      summary: obtienes todas las fotos
 *      tags:
 *       - Posts
 *      parameters:
 *       - in: query
 *         name: page
 *         schema:
 *           type: integer
 *         description: numero de pagina
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *         description: cantidad de elementos a obtener
 *      responses:
 *          200:
 *              description: paginacion de los todos los elementos subidos por los usuarios
 */
router.get('/foto-posts',getFotoPosts);

export default router;