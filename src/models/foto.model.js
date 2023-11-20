import mongoose, { mongo } from "mongoose";

const FotoInformationSchema = new mongoose.Schema({
    image:{
        public_id : String,
        secure_url: String
    },
    description:{
        type: String
    },
    like:{
        type: Number
    }
},{
    timestamps:true
});

export default mongoose.model("FotoInformation", FotoInformationSchema);