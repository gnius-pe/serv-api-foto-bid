import { Router } from "express";
import { authRequired } from "../middlewares/validateToken.js";
import {getPatients,createPatient,getPatient,updatePatient,deletePatient} from "../controllers/patient.controller.js"

const router = Router();

router.get('/patients',authRequired,getPatients);


router.get('/patient/:id',authRequired,getPatient);


router.post('/patient',authRequired,createPatient);


router.delete('/patient/:id',authRequired,deletePatient);


router.put('/patient/:id',authRequired,updatePatient);
//router.put('/patient/:id',authRequired,updatePatient);
export default router;