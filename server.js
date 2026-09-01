console.log("Web serverni boshlash");

const express = require("express");
const app =  express();

const http = require("http");
const fs = require("fs");

let user;
fs.readFile("database/user.json", "utf-8", function(err, data){
    if(err){
        console.log("Xatolik yuz berdi: ", err);
    } else {
        user = JSON.parse(data);
    }
});



// 1 - Kirish codelari
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// 2: Session code
// 3: Views code
app.set("views", "views");
app.set("view engine", "ejs");

// 4 Routing code
app.post("/create-item", function(req, res){
    console.log(req.body);
    res.send("Form ma'lumotlari qabul qilindi");
});
app.get("/", function(req, res){
    res.render("reja");
});
app.get("/author", function(req, res){
    res.render("author", {user: user});
});

const server = http.createServer(app);
let PORT = 3000;
server.listen(PORT, function(){
    console.log("The server is running successfully on port: ", PORT, `https://localhost:${PORT}/`);
})
