import Task from "#components/task/model.js"
import Joi from 'joi'

//récupérer toutes les taches
export async function ToutesTaches (ctx) {
    try {
        ctx.body = await Task.find({})
    } catch (e) {
        ctx.badRequest({message: e.message})
    }
}

//récupérer une tâche par son ID
export async function TacheParId (ctx) {
    try{
        ctx.body = await Task.findById(ctx.params.idTask)
    } catch(err){
        ctx.badRequest({message: err.message})
    }
}

//créer une tâche
export async function creerTache(ctx) {
    try {

        const taskValidationSchema = Joi.object({
            nomTache: Joi.string().required(),
            description: Joi.string(),
            importance: Joi.number().required(),
            Valide: Joi.boolean()
        });

        const { erreur } = taskValidationSchema.validate(ctx.request.body);
        if(erreur) throw new Error(erreur);

        await Task.create({idTask: ctx.params.idTask, taskName : ctx.request.body.taskName, description: ctx.request.body.description, importance: ctx.request.body.importance, username: ctx.request.body.username})
        ctx.body = "Task ajoutée"

    } catch (e) {
        ctx.badRequest({message: e.message})
    }
}

// MaJ une tâche a partir de son id
export async function MajTacheParId(ctx){
    try{
        const taskValidationSchema = Joi.object({
            nomTache: Joi.string().required(),
            description: Joi.string(),
            importance: Joi.number().required(),
            nomUtilisateur: Joi.string().required()
        });
        const { erreur } = taskValidationSchema.validate(ctx.request.body);
        if(erreur) throw new Error(erreur);

        let taskObj = ctx.request.body;
        await Task.findByIdAndUpdate(ctx.params.idTask, taskObj)
        ctx.body = "tâche mise à jour"
        ctx.status = 200

    } catch(err){
        ctx.badRequest({message: err.message})
    }
}

//supprimer une tâche à partir de son ID
export async function deleteTaskById(ctx){
    try{
        await Task.findByIdAndRemove(ctx.params.idTask)
        ctx.body = "tâche supprimée"
        ctx.status = 200
        
    } catch(err){
        ctx.badRequest({message: err.message})
    }
}