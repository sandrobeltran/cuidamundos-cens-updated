import { model, models, Schema } from "mongoose";

const evidenceSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true
    },
    active: {
        type: Boolean,
        required: true,
    },
    comments: {
        type: Array<{
            _id: number
            author: String,
            content: String,
        }>,
        required: true,
    },
    submissions: {
        type: Array<{
            author: String,
            state: Number,
            lastUpdateAt: Date,
            submitedAt: Date,
            deadline: Date,
            content: {
                answer: String,
                link: String
            }
        }>,
        required: true,
    },
    deadline: {
        type: Date,
        required: true
    }
}, {
    timestamps: true,
    versionKey: false,
})

export default models.Evidence || model("Evidence", evidenceSchema)