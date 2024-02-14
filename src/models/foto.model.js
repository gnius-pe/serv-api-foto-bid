import mongoose, { mongo } from "mongoose";

import mongoosePaginate from "mongoose-paginate-v2"

const Like = new mongoose.Schema({
        user:{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: true
        },
        date: {
            type: Date,
            required: true
        }
    });
    

const Comment = new mongoose.Schema({
        author:{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: true
        },
        date: {
            type: Date,
            required: true
        },
        content:{
            type: String,
            required: true
        }
    });
    

const FotoInformationSchema = new mongoose.Schema({
    image:{
        public_id : String,
        secure_url: String
    },
    description:{
        type: String
    },
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    comments:{
        type: [Comment],
        required: false
    },
    likes:{
        type: [Like],
        required: false
    }
    
},{
    timestamps:true
});


FotoInformationSchema.plugin(mongoosePaginate);
export default mongoose.model("FotoInformation", FotoInformationSchema);