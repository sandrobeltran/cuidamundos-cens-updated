import { model, models, Schema } from "mongoose";

const messageSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        minLength: 2,
        maxLength: 80,
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    }
}, {
    timestamps: true,
    versionKey: false,
})

export default models.Message || model("Message", messageSchema)