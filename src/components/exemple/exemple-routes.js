import Router from '@koa/router'

const exemples = new Router()

    const todos = [
        {id: 1,
            title: 'acheter des patates'
        },
        {
            id: 2,
            title: 'acheter des pommes'
        
        }
    ]
     
router.get('/', (ctx, next)=>{
    ctx.body = todos
})

router.get('/:id', (ctx) =>{
    const task = todos.find(t => parseInt(ctx.params.id)=== t.id)
    ctx.body = task
})

router.post('/', ctx => {
    const newTask = {
        id: todos.length+1,
        title: ctx.request.body.title
    }
    todos.push(newTask)
    ctx.status = 204
})

router.put('/id', (ctx)=> {
    const task = todos.find(t => parseInt(ctx.params.id )=== t.id)
    task.title = ctx.request.body.title
    ctx.body=todos
})

router.delete