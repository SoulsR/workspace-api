import Koa from 'koa'
import Exemple from '#components/exemple/exemple-model.js'
import '#config/database.js'
import bodyParser from 'koa-bodyparser'
import { API_V1_ROUTER} from '#routes/index.js'

const app = new Koa()

app
.use(bodyParser())
.use(router.routes())
.use(router.allowedMethods())

app.listen(process.env.PORT, ()=> console.log(`Server listening to port: ${process.env.PORT}`))

