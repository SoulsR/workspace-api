import Router from '@koa/router'

const exemples = new Router()

exemples.get('/', ExempleControllers.index)
    

exemples.get('/:id', (ctx) =>{
    const task = todos.find(t => parseInt(ctx.params.id)=== t.id)
    ctx.body = task
})

exemples.post('/', ctx => {
    const newTask = {
        id: todos.length+1,
        title: ctx.request.body.title
    }
    todos.push(newTask)
    ctx.status = 204
})

exemples.put('/id', (ctx)=> {
    const task = todos.find(t => parseInt(ctx.params.id )=== t.id)
    task.title = ctx.request.body.title
    ctx.body=todos
})

exemples.delete('/:id', (ctx) => {
    const updatedTodos = todos.filter(t => parseInt(ctx.params.id) !== t.id)
    ctx.body = updatedTodos
})

export default exemples