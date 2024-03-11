import { model, models, Schema } from "mongoose"

const gameSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    type: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    href: {
        type: String,
        required: true,
        unique: true
    },
    data: {
        type: {
            questions: {
                id: Number,
                title: String,
                options: Array<String>,
                answer: String,
                image: String,
            },
            timeLimit: Number
        },
        required: true,
    },
    cover: {
        type: String,
        required: true,
    },
    active: {
        type: Boolean,
        required: true
    },
    points: {
        type: Number,
        required: true,
    },
    winners: {
        type: Array<String>,
        required: true
    },
    matches: {
        type: {
            uid: String,
            time: Number,
            score: Number
        },
        required: true,
    }
}, {
    timestamps: true,
    versionKey: false
})

export default models.Game || model("Game", gameSchema)