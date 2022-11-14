import mongoose from "mongoose"

const {Schema} = mongoose

const exempleSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description:{
        type: String
    },
    colors: {
        type: [String],
        required: true
    },
    price: {
        type: Number,
        required: true
    }
})

const Exemple = mongoose.model('Exemple', exempleSchema)

Exemple.create({
    name: 'test Product',
    description: 'Lorem ipsum',
    colors: ['black', 'blue', 'red'],
    price: 1000
})

export default Exemple