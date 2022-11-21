import mongoose from "mongoose"

const {Schema} = mongoose

const taskSchema = new Schema({
    nomListe: {
        type: String,
        required: true
    }
})

const Task = mongoose.model('Task', taskSchema)
