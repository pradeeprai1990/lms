let express=require("express");
const courseRoutes = require("./routes/admin/CourseRoutes");
let webRoutes=express.Router();

webRoutes.use("/course",courseRoutes)

module.exports=webRoutes;