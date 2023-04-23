const express = require("express");
const router = express.Router();
const multer = require("multer");


const emailStorage = multer.diskStorage({
  destination:(req,file,cb)=> {
    cb(null, 'docs');
  },
  filename:(req,file,cb)=>{
    cb(null, file.originalname);
  }
})

const HomeController = require("../controller/home");

router.get("/", HomeController.getHomePage);

router.get("/courses", HomeController.getCoursepage);

router.get("/contact", HomeController.getContactPage);

router.get("/events", HomeController.getEventPage);

router.get("/tools", HomeController.getToolPage);

router.post("/send-email",multer({storage:emailStorage}).single('user_notes'), HomeController.sendEmail);

module.exports = router;