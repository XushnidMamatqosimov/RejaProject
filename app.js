console.log("Web serverni boshlash");
const express = require("express");
const app = express();

// MongoDB chaqirish;
const db = require("./server").db();
let user;

/* fs.readFile("database/user.json", "utf-8", function(err, data) {
    if (err) {
        console.log("Xatolik yuz berdi: ", err);
    } else {
        user = JSON.parse(data);
    }
}); */

// 1 - Kirish codelari
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 2: Session code
// 3: Views code
app.set("views", "views");
app.set("view engine", "ejs");

// 4 Routing code

app.post("/create-item", function (req, res) {
    console.log(req.body);
    const new_reja = req.body.reja;
    db.collection("plans").insertOne({ reja: new_reja }, (err, data) => {
        if (err) {
            console.log(err);
            res.status(500).json({ error: "something went wrong" });
        } else {
            res.json({ _id: data.insertedId, reja: new_reja }); // <-- _id ham qo'shildi
        }
    });

});

app.get("/", function (req, res) {
    db.collection("plans")
        .find()
        .toArray((err, data) => {
            if (err) {
                console.log(err);
                res.end("something went wrong");
            } else {
                console.log(data);
                res.render("reja", { items: data });
            }
        });
});

app.get("/author", function (req, res) {

    const user = {
        name: "Xushnid",
        profession: "Developer"
    };

    res.render("author", { user });
});
module.exports = app;