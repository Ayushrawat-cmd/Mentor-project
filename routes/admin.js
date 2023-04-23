const express = require("express");
const router = express.Router();
const AdminController = require("../controller/admin");

const isAdmin = require("../middleware/isAdmin");
const multer = require("multer");

const MONGODB_URI =
  "mongodb+srv://admin-ayush:ayush123@cluster0.itvnq.mongodb.net/NotesProject";
const GridFsStorage = require("multer-gridfs-storage").GridFsStorage;
const storage = new GridFsStorage({
    url: MONGODB_URI,
    file: (req, file) => {
      return new Promise((resolve, reject) => {
        const course = req.body.course.toLowerCase();
        const semester = req.body.semester.toLowerCase();
        const subject = req.body.subject.toLowerCase();
        // console.log(req.body.subject);
        const originalName = file.originalname;;
          const filename = course+'-'+semester+ '-'+subject+'-'+originalName;
          const fileInfo = {
            filename:  filename,
            bucketName: 'uploads'
          };
          resolve(fileInfo);
      });
    }
  });
  const upload = multer({storage: storage});
//   app.use(upload.single('file'));
  

router.get("/admin/add-notes",isAdmin, AdminController.getAddNotesPage);

router.post("/admin/add-notes",[isAdmin, upload.single('file')], AdminController.postAddNotesPage);

module.exports = router