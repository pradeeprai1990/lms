const DbConnection = require("../../../dBConnection")

exports.addCourse=async (req,res)=>{
    let db=await DbConnection();
    let courseTable=await db.collection('course')
    let courseName=req.body.courseName;
    let coursePrice=req.body.coursePrice;
    let coursesDuration=req.body.coursesDuration;
    let coursesDescription=req.body.coursesDescription;
    let status=req.body.status;
    let courseImage=req.file.filename;
    let finalObj={
        courseName,
        coursePrice,
        coursesDuration,
        coursesDescription,
        status,
        courseImage
    }
    let finalres=await courseTable.insertOne(
        finalObj
    )
    // console.log(req.body)
    // console.log(req.file.filename)
    res.send(finalres)
}
exports.viewCourse=async (req,res)=>{
    let db=await DbConnection();
    let courseTable=await db.collection('course')
    let finalCourse=await courseTable.find().toArray();
    let courseImgUrl="http://localhost:8000/uploads/course/"

    res.send({
        status:1,
        finalCourse,
        courseImgUrl
    })
}
exports.deleteCourse=(req,res)=>{
    res.send("Welcome delete Course Function")
}