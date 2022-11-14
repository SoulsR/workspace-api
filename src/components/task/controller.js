import Task from "#components/task/model.js"
import Joi from 'joi'

export async function index (ctx) {
    try{
        ctx.body = await Task.find({})
    }catch (e){
        ctx.badRequest({ message: e.message })
    }
}

export async function create (ctx) {
    try{

    }catch (e){
        ctx.badRequest({ message: e.message })
    }
}