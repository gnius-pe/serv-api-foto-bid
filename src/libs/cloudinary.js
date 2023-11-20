import {v2 as cloud} from 'cloudinary';
import {CLOUD_NAME,API_KEY, API_SECRET } from "../config.js";

cloud.config({ 
    cloud_name: CLOUD_NAME, 
    api_key: API_KEY, 
    api_secret: API_SECRET,
    secure: true
  });

export async function upLoadImage(filePath){
    return await cloud.uploader.upload(filePath,{
        folder:'foto bid/post fotos'
    });
}

export async function deleteImage(publicId){
    return await cloud.uploader.destroy(publicId)
}