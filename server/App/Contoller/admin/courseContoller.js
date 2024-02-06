exports.addCourse=(req,res)=>{
    
    console.log(req.body)
    console.log(req.file.filename)
    res.send("Welcome add Course Function")
}
exports.viewCourse=(req,res)=>{
    res.send("Welcome view Course Function")
}
exports.deleteCourse=(req,res)=>{
    res.send("Welcome delete Course Function")
}