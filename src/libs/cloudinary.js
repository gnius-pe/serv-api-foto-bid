import {v2 as cloudInary} from 'cloudInary';
import {CLOUD_NAME,API_KEY, API_SECRET } from "../config.js";

cloudInary.config({ 
    cloud_name: CLOUD_NAME, 
    api_key: API_KEY, 
    api_secret: API_SECRET,
    secure: true
  });

export async function upLoadImage(filePath){
    return await cloudInary.uploader.upload(filePath,{
        folder:'foto bid/post fotos'
    });
}

export async function deleteImage(publicId){
    return await cloudInary.uploader.destroy(publicId)
}