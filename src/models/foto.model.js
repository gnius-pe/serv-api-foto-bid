import mongoose, { mongo } from "mongoose";

import mongoosePaginate from "mongoose-paginate-v2"

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
    },
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
},{
    timestamps:true
});

FotoInformationSchema.plugin(mongoosePaginate);
export default mongoose.model("FotoInformation", FotoInformationSchema);