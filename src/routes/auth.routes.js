import { Router } from "express";
import {login, register, logout, profile  , verifyToken} from "../controllers/auth.controller.js";
import {authRequired} from "../middlewares/validateToken.js";
import { validateSchema } from "../middlewares/validetor.midleware.js";
import { regiterSchema, loginSchema } from "../schemas/auth.schemas.js";

const router = Router();

/**
 * @swagger
 * components:
 *  schemas:
 *      Registro:
 *          type: object
 *          properties:
 *              email:
 *                  type: string
 *                  description: correo del usuario nuevo
 *              password:
 *                  type: string
 *                  description: una contra para el usuario
 *              username:
 *                  type: string
 *                  description: un nombre o apodo para el usuario
 *          required:
 *              -email
 *              -password
 *              -username
 *          example:
 *              email: igor.ramos@unas.edu.pe
 *              password: 123456
 *              username: capigor
 */

/**
 * @swagger
 * components:
 *  schemas:
 *      Login:
 *          type: object
 *          properties:
 *              email:
 *                  type: string
 *                  description: correo del usuario
 *              password:
 *                  type: string
 *                  description: la contra sel usuario (.-.)
 *          required:
 *              -email
 *              -password
 *          example:
 *              email: igor.ramos@unas.edu.pe
 *              password: "123456"
 */

/**
 * @swagger
 * /api/register:
 *  post:
 *      summary: crea un nuevo usuario
 *      tags:
 *       - Sesion
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      $ref: '#/components/schemas/Registro'
 *      responses:
 *          200:
 *              description: newvo usuario regitrado
 */
router.post('/register', validateSchema(regiterSchema), register);

/**
 * @swagger
 * /api/login:
 *  post:
 *      summary: ingresa al sistema
 *      tags:
 *       - Sesion
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      $ref: '#/components/schemas/Login'
 *      responses:
 *          200:  
 *              description: Usuario ingreso con exito
 */
router.post('/login', validateSchema(loginSchema), login);

/**
 * @swagger
 * /api/logout:
 *   post:
 *     summary: cerrar sesion
 *     tags:
 *       - Sesion
 *     responses:
 *       200:
 *         description: OK          
 */
router.post('/logout', logout);


router.get('/verify', verifyToken);

router.get('/profile', authRequired, profile);

export default router
