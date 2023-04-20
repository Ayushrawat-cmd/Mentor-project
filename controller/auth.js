const User = require("../model/user");
const bcrypt = require("bcrypt");

exports.getLoginPage = (req,res,next)=>{
    res.render("auth/login", {emailError: req.flash("emailError"),title:'Login', passwordError: req.flash("passwordError")});
};

exports.getRegisterPage = (req,res,next)=>{
    res.render("auth/sign-up",{error: req.flash("error"), title: 'Register'});
};

exports.postRegisterPage = (req,res,next) =>{
    const username = req.body.username;
    const password =req.body.password;
    const email = req.body.email;
    User.findOne({email: email}).then(
        user=>{
            if(user){
                req.flash("error", "This email id is already exist");
                res.redirect("/signup")
            }
            else{
                bcrypt.hash(password, 12).then(
                    hashedPassword =>{
                        const user = new User({
                            username: username,
                            password: hashedPassword,
                            email: email
                        })
                        return user.save();
                    }
                ).then(
                    user=>{
                        req.session.user = user;
                        req.session.loggedIn = true;
                        res.redirect("/");
                    }
                ).catch(err=>{console.log(err);})
            }
        }
    ).catch(err=>{
        console.log(err);
    })
};

exports.postLoginPage = (req,res,next)=>{
    const email = req.body.email;
    const password = req.body.password;
    User.findOne({email: email}).then(user=>{
        if(user){
            bcrypt.compare(password, user.password).then(doMatch =>{
                if(doMatch){
                    req.session.user = user;
                    req.session.loggedIn = true;
                    res.redirect("/");
                }
                else{
                    req.flash("passwordError", "Enter the correct password");        
                    res.redirect("/login");
                }
            }).catch(err=>{console.log(err);})
        }
        else{
            req.flash("emailError", "Enter the correct email id");
            res.redirect("/login");
        }
    }).catch(err=>{console.log(err);})
}

exports.postLogout = (req,res,next)=>{
    req.session.destroy(err=>{
        if(err)
            console.log(err);
        else
            res.redirect("/");
    })
}