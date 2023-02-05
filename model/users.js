import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    name: {
        type: String
    },
    avatar: {
        type: String
    },
    email: {
        type: String,
        unique: true,
        lowercase: true
    },
    salario: {
        type: String
    },
    date: {
        type: String
    },
    status: {
        type: String
    }
})


const User = mongoose.model("User", UserSchema)

export default User;