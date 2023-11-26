import { json } from "express";
import FotoInformationSchema from "../models/foto.model.js"
import { upLoadImage, deleteImage } from "../libs/cloudinary.js";
import fs from "fs-extra";

export const createFotoInformation = async (req,res) => {
    try {
        console.log(req.user)
        if(!req.files?.image) return res.status(400).json({
            message: "No hay imagen"
        })
        const tempFile = req.files.image.tempFilePath;
        const resultado = await upLoadImage(tempFile)
        const newFotoPost = new FotoInformationSchema(req.body)
        newFotoPost.image = {
            public_id: resultado.public_id,
            secure_url: resultado.secure_url
        }
        newFotoPost.user = req.user.id;   
        await fs.unlink(tempFile);
        const saveFotoInformation = await newFotoPost.save();
        res.json(saveFotoInformation);
    } catch (error) {
        return res.status(401).json({message: error.message});
    }
}

export const deleteFotoInformation = async (req,res) =>{
    try {
        const fotoInformation = await FotoInformationSchema.findByIdAndDelete(req.params.id);
        if(!fotoInformation) return res.stats(404).json({
            message:'Product does not exists'
        })

        await deleteImage(fotoInformation.image.public_id)
        return res.json(fotoInformation)

    } catch (error) {
        return res.stats(500).json({
            message:error.message
        })
    }
}

export const getFotoInformation = async (req, res) =>{
    try {
        const fotoInformation = await FotoInformationSchema.findById(req.params.id);
        if(!fotoInformation) return res.status(404).json({
            message: 'informacion de la foto no found'
        });
        res.json(fotoInformation);
    } catch (error) {
        return res.stats(500).json({
            message:error.message
        })
    }
}

export const getFotosInformations = async (req,res) =>{
    const fotosInformations =await FotoInformationSchema.find();
    res.json(fotosInformations);
}