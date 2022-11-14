import mongoose from "mongoose";

const { Schema } = mongoose;

const exemplesSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    colors: {
        type: [String],
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    createAt: {
        type: Date,
        required: true
    },
    updateAt: {
        type: Date,
        required: true
    }
});

const exemplesModel = mongoose.model('Exemples', exemplesSchema);

exemplesSchema.static({
    async createOne(object) {
        await exemplesModel.insertOne(object);
    },
    async updateById (object) {
        await exemplesModel.updateOne({_id: object.id}, {$set: object});
    }
})

// exemplesModel.create({
//     name: "TOTO",
//     description: "LOREM IPSUM",
//     color: ["red", "blue"],
//    price: 12
// });
//
// const findALl = async () => {
//     const exemples = await exemplesModel.find();
// }
//
// const findByName = async (name) => {
//     const exemple = await exemplesModel.find({name: name});
// }
//
// const findById = async (id) => {
//     const exemple = await exemplesModel.findById(id);
// }
//
// const updateById = async (id, object) => {
//     await exemplesModel.updateOne({_id: id}, {$set: object});
// }
//
// const deleteById = async (id) => {
//     await exemplesModel.deleteOne({_id: id});
// }

export default exemplesModel;