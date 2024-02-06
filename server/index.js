let express=require("express");
var cors = require('cors')
const webRoutes = require("./App/routers");
let app=express();

app.use(cors())

app.use(express.json())
app.use(webRoutes)

app.listen("8000")