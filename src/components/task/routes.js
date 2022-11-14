import Router from '@koa/router'

const tasks = new Router()

tasks.get('/', TaskControllers.index)

tasks.get('/:id', (ctx) =>{
    const task = todos.find(t => parseInt(ctx.params.id)=== t.id)
    ctx.body = task
})