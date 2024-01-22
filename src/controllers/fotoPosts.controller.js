import fotoModel from "../models/foto.model.js";

export const getFotoPosts = async (req,res) =>{
    try {
        //agregar paginacion para mejorar el rendimiento
        const fotoModelsData = await fotoModel.find();
        res.json(fotoModelsData)
    } catch (error) {
        return res.status(500).json({
            message: error.message
        })
    }

}