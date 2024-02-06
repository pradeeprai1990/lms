let express=require("express");
const multer  = require('multer')
let path=require("path")
const { addCourse, viewCourse, deleteCourse } = require("../../Contoller/admin/courseContoller");

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads/course')
    },
    filename: function (req, file, cb) {
        // Generating a unique filename for the uploaded file
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        const extension = path.extname(file.originalname);
        const fileName = 'course_image_' + uniqueSuffix + extension;
        cb(null, fileName);
    }
  })

  
let courseRoutes=express.Router();

const upload = multer({ storage: storage }).single('courseImg');


courseRoutes.post('/add-course',upload,addCourse)
courseRoutes.get('/view-course',viewCourse)
courseRoutes.get('/delete-course',deleteCourse)
module.exports=courseRoutes;