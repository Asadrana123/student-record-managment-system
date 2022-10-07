const express=require('express');
const path=require('path');
const db=require('./config/mongoose');
const Contact=require('./config/model/contact');
const port=5000;
const app=express();
app.set('view engine','ejs') ;
app.set('views',path.join(__dirname,'view'));
app.use(express.urlencoded());
app.use(express.static('assets'));
/*contactlist=[
    {
        name:'Asad',
        phone:112345678
    },
    {
        name:'Asad',
        phone:111111
    },
    {
        name:'Asad',
        phone:22222222
    }
]*/
app.post('/createcontact',function(req,res){
     Contact.create({
        name:req.body.name,
        phone:req.body.phone,
        branch:req.body.branch,
        rollnumber:req.body.rollnumber
     },function(err,newContact){
           if(err){
            console.log(err);
            return;
           }
           console.log('****',newContact);
           return res.redirect('back');
     })
})
app.get('/',function(req,res){
    Contact.find({},function(err,contacts){
        if(err){
            console.log("error occured");
            return;
        }
        return res.render('practice',{
            title:"Studens Record",
            contact_list:contacts
            });
    })
});
app.get("/delete-contact",function(req,res){
    let id=req.query.id;
    console.log(req.query);
    Contact.findByIdAndDelete(id,function(err){
        if(err){
            console.log("error");
            return;
        }
    })
    return res.redirect('back');
})
app.listen(port,function(err){
    if(err){
        console.log("error");
    }
    else{
        console.log("my express server is running");
    }
});
