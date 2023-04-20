exports.getBtechCSI = (req,res,next)=>{
    res.render("courses/btech-cse", {path: "/courses",title:'Btech. compter science and engineering',  isAuthenticated: req.session.loggedIn, user:req.session.user});
};

exports.getBtechECE = (req,res,next)=>{
    res.render("courses/btech-ece", {path: "/courses",title:'Btech. electronic and communication engineering',  isAuthenticated: req.session.loggedIn, user:req.session.user});
};

exports.getBtechAI = (req,res,next)=>{
    res.render("courses/btech-ai", {path: "/courses",title:'Btech. artificial intelligence',  isAuthenticated: req.session.loggedIn,user:req.session.user});
};

exports.getBCA = (req,res,next)=>{
    res.render("courses/bca", {path: "/courses",title:"Bacheors of computer application",  isAuthenticated: req.session.loggedIn, user:req.session.user});
};