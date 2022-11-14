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

const findAll = async () => {
    const exemples = await Exemple.find({names: ""})
    console.log('FIND ALL =========', exemples)
}

const findById = async () => {
    const exemple= await Exemple.findById('637219adbc4a961c5d61bfbc')
    console.log(exemple);
}
const updateById = async() => {
    ///méthode 1
    const exemple = await Exemple.findByIdAndUpdate('637219adbc4a961c5d61bfbc', {name: "Premier element"})

    /*///méthode 2
    const exemple = await Exemple.findById('637219adbc4a961c5d61bfbc')
    exemple.name = "Modification"
    exemple.save()

    ///méthode 3
    const exemple = await Exemple.findById('637219adbc4a961c5d61bfbc')
    exemple.set({
        name: "Modifié avec Set"
    })
    exemple.save*/
}


/*findAll()
findById()
updateById()*/

export default Exemple