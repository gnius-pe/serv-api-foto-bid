import { Router } from "express";
import { createFotoInformation, getFotoInformation, deleteFotoInformation, getFotosInformations } from "../controllers/fotoInformation.controller.js";
import fileUpload from 'express-fileupload';
import { authRequired } from "../middlewares/validateToken.js";

const router = Router();

/**
 * @swagger
 * components:
 *  schemas:
 *      Fotografia:
 *          type: object
 *          properties:
 *              image:
 *                  type: object
 *                  properties:
 *                      public_id:
 *                          type: string
 *                          description: id publica de la imagen
 *                      secure_url:
 *                          type: string
 *                          description: url de la fotografia
 *              description:
 *                  type: string
 *                  description: descripcion de la fotografia
 *              like:
 *                  type: number
 *                  description: cantidad de me gusta de la fotografia
 *              user:
 *                  type: string
 *                  format: objectid
 *                  description: Identificador único del usuario
 *              
 * 
 */

/**
 * @swagger
 * /api/foto:
 *  post:
 *      summary: subir una imagen
 *      tags:
 *          - Foto
 *      requestBody:
 *          required: true
 *          content:
 *              multipart/form-data:
 *                  schema:
 *                      type: object
 *                      properties:
 *                          image:
 *                              type: string
 *                              format: binary
 *                              description: Archivo de imagen (foto)
 *                          description:
 *                              type: string
 *                              description: Descripcion de la foto
 *      responses:
 *          200:
 *              description: listado de pacientes
 */
router.post('/foto',authRequired,fileUpload({
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
 *              description: uns listado de tus fotos
 */
router.get('/fotos',getFotosInformations);
router.get('/foto/:id',getFotoInformation);
router.delete('/foto/:id',deleteFotoInformation);

export default router;