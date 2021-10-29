const express=require("express");
const PORT=3000;
const app=express();

//set templating Engine
app.set("view engine","ejs");
app.use(express.static("public"));
app.use(express.urlencoded({extended:false}));
//Navigation
app.get("/",(req,res)=>{
    res.render("index");
});
app.get("/profile",(req,res)=>{
    res.render("profile");
});

app.post("/profile",(req,res)=>{
    console.log(req.body);
    
    res.redirect("submittable");
});
app.post("/submittable",(req,res)=>{
    console.log(req.body);
    
    res.render("submittable",{
        fname:req.body.fname,
        lname:req.body.lname,
        email:req.body.email,
        mobile:req.body.mobile,
        birthdate:req.body.date,
        gender:req.body.gender,
        address:req.body.address,
        institute:req.body.institute,
        department:req.body.department,
        semester:req.body.sem,
    });
});

app.listen(PORT,()=>{
    console.log(`Server is listening on port ${PORT}`);
})