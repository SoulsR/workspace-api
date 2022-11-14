import Exemple from "#components/exemple/exemple-model.js"
import Joi from 'joi'

export async function index (ctx) {
    try{
        ctx.body = await Exemple.find({})
    }catch (e){
        ctx.badRequest({ message: e.message })
    }
}

export async function create (ctx) {
    try{
        const exempleValidationSchema = Joi.object({
            name: Joi.string().min(4).required(),
            description: Joi.string(),
            colors: [Joi.string()],
            price: Joi.number().required(),
        })
        const objTest = {name : 'test', value: 123}
        const arrTest = ['value 1', 'value 2']
        //const {name, nested: {color}} = objTest
        ctx.body = await Exemple.find({})
    }catch (e){
        ctx.badRequest({ message: e.message })
    }
}