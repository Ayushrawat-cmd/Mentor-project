const User = require("../model/user");
exports.getHomePage = (req, res, next) => {
  User.countDocuments().then((numberOfUsers) => {
    // console.log(numberOfUsers);
    res.render("home/index", {
      path: "/",
      isAuthenticated: req.session.loggedIn,
      user: req.session.user,
      numOfUsers: numberOfUsers,
      title:'Spectra'
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
