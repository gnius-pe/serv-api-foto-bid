import { Router } from "express";
import { createFotoInformation, getFotoInformation, deleteFotoInformation, getFotosInformations } from "../controllers/fotoInformation.controller.js";
import fileUpload from 'express-fileupload';
const router = Router();

/**
 * @swagger
 * /api/foto:
 *  post:
 *      summary: subir una imagen
 *      tags:
 *       - Foto
 *      responses:
 *          200:
 *              description: listado de pacientes
 */
router.post('/foto',fileUpload({
    useTempFiles : true,
    tempFileDir : './uploads'
}),createFotoInformation);

/**
 * @swagger
 * /api/fotos:
 *  get:
 *      summary: obtienes todas las fotos
 *      tags:
 *       - Foto
 *      responses:
 *          200:
 *              description: listado de pacientes
 */
router.get('/fotos',getFotosInformations);
router.get('/foto/:id',getFotoInformation);
router.delete('/foto/:id',deleteFotoInformation);

export default router;