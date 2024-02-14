import fotoModel from "../models/foto.model.js";

export const getFotoPosts = async (req,res) =>{
    try {
        //agregar paginacion para mejorar el rendimiento

        const options = {
            page :req.query.page || 1,
            limit: req.query.limit || 10
        }
        const fotoModelsData = await fotoModel.paginate({},options,(err,fotoModel) => {
            res.send({
                fotoModel
            })
        })
    } catch (error) {
        return res.status(500).json({
            message: error.message
        })
    }

}