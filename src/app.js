import express from 'express';
import morgan from "morgan";
import cookieParser from 'cookie-parser';
import authRoutes from "./routes/auth.routes.js";
import patientRouter from "./routes/patient.routes.js";
import fotoInformationRoutes from "./routes/fotoInformation.routes.js";
import {swagggerJSDocs} from "../src/libs/swagger.js";
import cors from "cors";


const app = express();

app.use(cors({
    origin:['http://localhost:5173','https://fotobid.netlify.app/'],
    credentials:true
}));
app.use(morgan('dev'));
app.use(express.json());
app.use(cookieParser());
app.use('/api',authRoutes);
app.use('/api',patientRouter);
app.use('/api',fotoInformationRoutes);
swagggerJSDocs(app,3000);



export default app;