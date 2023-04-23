const User = require("../model/user");
const Notes = require("../model/notes");
const nodemailer = require("nodemailer");
const fs = require("fs");
const path = require('path');
const sendGridTransport = require("nodemailer-sendgrid-transport");
const transporter = nodemailer.createTransport(sendGridTransport({
  auth:{
    api_key:'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'

  }
}));

const rootDir = path.dirname(require.main.filename);

exports.getHomePage = (req, res, next) => {
  Notes.countDocuments().then((numOfNotes)=>{
    User.countDocuments().then((numberOfUsers) => {
      // console.log(numberOfUsers);
      res.render("home/index", {
        path: "/",
        isAuthenticated: req.session.loggedIn,
        user: req.session.user,
        numOfUsers: numberOfUsers,
        numOfNotes: numOfNotes,
        title:'SEST.JH'
      });
    });

  });
};

exports.getCoursepage = (req, res, next) => {
  res.render("home/courses", {
    path: "/courses",
    isAuthenticated: req.session.loggedIn,
    user: req.session.user,
    errorMessage: req.flash("error"),
    title:'Courses'
    
  });
};

exports.getContactPage = (req, res, next) => {
  res.render("home/contact", {
    path: "/contact",
    isAuthenticated: req.session.loggedIn,
    user: req.session.user,
    title:'Contacts'
  });
};

exports.sendEmail = (req,res,next)=>{
  const name = req.body.name;
  const upload_file = req.file.filename;
  const email = req.body.sendEmail;
  const subject = req.body.subject;
  const message = req.body.message;
  const p = path.join(rootDir, 'docs', upload_file);
  // fs.readFile(p,(err, fileContent)=>{
    
  // });
  transporter.sendMail({
    from:'noteslibrary99@gmail.com',
    attachments:[
      {
        filename: upload_file,
        path:p,
        contentType:'application/pdf',

      }
    ],
    to:'noteslibrary99@gmail.com',
    subject:subject,
    html:`<h1>Name:- ${name}</h1><h2>Email:- ${email}</h2><p>${message}</p>`
  }).then(()=>{
    fs.unlink(p,()=>{
      req.flash({'success': 'Email sent sucessfully!'});
      res.redirect("/contact");});
    
  })
  .catch(err=>{
    console.log(err);
  });
  
}

exports.getEventPage = (req, res, next) => {
  res.render("home/events", {
    path: "/events",
    isAuthenticated: req.session.loggedIn,
    user: req.session.user,
    title:'Events'
  });
};

exports.getToolPage = (req, res, next) => {
  res.render("home/tools", {
    path: "/tools",
    isAuthenticated: req.session.loggedIn,
    user: req.session.user,
    title:'Tools'
  });
};
