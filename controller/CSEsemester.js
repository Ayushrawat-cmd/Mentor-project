exports.getSem1 = (req,res,next)=>{
    res.render("semesters/CSEsem/sem1", {path:"/courses",title:'Computer science semester 1', isAuthenticated: req.session.loggedIn, user: req.session.user});
}
exports.getSem2 = (req,res,next)=>{
    res.render("semesters/CSEsem/sem2", {path:"/courses",title:'Computer science semester 2', isAuthenticated: req.session.loggedIn, user: req.session.user});
}
exports.getSem3 = (req,res,next)=>{
    res.render("semesters/CSEsem/sem3", {path:"/courses",title:'Computer science semester 3', isAuthenticated: req.session.loggedIn, user: req.session.user});
}

exports.getSem4 = (req,res,next)=>{
    res.render("semesters/CSEsem/sem4", {path:"/courses",title:'Computer science semester 4', isAuthenticated: req.session.loggedIn, user: req.session.user});
}
exports.getSem5 = (req,res,next)=>{
    res.render("semesters/CSEsem/sem5", {path:"/courses",title:'Computer science semester 5', isAuthenticated: req.session.loggedIn, user: req.session.user});
}
exports.getSem6 = (req,res,next)=>{
    res.render("semesters/CSEsem/sem6", {path:"/courses",title:'Computer science semester 6', isAuthenticated: req.session.loggedIn, user: req.session.user});
}
exports.getSem7 = (req,res,next)=>{
    res.render("semesters/CSEsem/sem7", {path:"/courses",title:'Computer science semester 7', isAuthenticated: req.session.loggedIn, user: req.session.user});
}
exports.getSem8 = (req,res,next)=>{
    res.render("semesters/CSEsem/sem8", {path:"/courses",title:'Computer science semester 8', isAuthenticated: req.session.loggedIn, user: req.session.user});
}



