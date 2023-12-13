import mongoose from "mongoose";


const userSchema = new mongoose.Schema({
    username:{
        type: String,
        required: true,
        unique: true,

    },
    email:{
        type: String,
        required: true,
        unique: true,

    },
    password:{
        type: String,
        required: true,
    },
    avatar:{
        type: String,
        default: "https://marketplace.canva.com/EAFdt9tY_fo/1/0/1600w/canva-blue-modern-business-man-facebook-profile-picture-Kq2gJmFD2wM.jpg"
    },
}, {timestamps:true}
)

const User = mongoose.model('User', userSchema)

export default User;