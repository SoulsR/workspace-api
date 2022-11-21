import mongoose from "mongoose"

const {Schema} = mongoose

const taskSchema = new Schema({
    nomTache: {
        type: String,
        required: true
    },
    description: {
        type: String,
    },
    importance: { 
        type: Number,
        required: true
    },
    Valide : {
        type: Boolean,
        default: false
    }
})

const Task = mongoose.model('Task', taskSchema)
