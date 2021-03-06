const User = require('../../models/User');
const bcrypt = require('bcrypt-nodejs');
const btoa = require('btoa');
//Login User
//@body:username,password
//@return: JSON Object ? @cookie:token
login = (req,res)=>{
    "use strict";
    User.findOne({
        username:req.body.username
    },(err,docs)=>{
        if(err){
            res.status(500).json({
                success:err,
                response:docs
            })
        }else{
            if(!docs || !bcrypt.compareSync(req.body.password,docs.password)){
                res.status(401).json({
                    success:false,
                    response:"No Match Record"
                })
            }else{
                res.status(200).cookie('token',btoa(docs._id),{ httpOnly: true }).json({
                    success:true
                })
            }
        }
    })
};

module.exports = login;