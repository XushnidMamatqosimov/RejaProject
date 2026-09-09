const http = require("http");
const mongodb = require("mongodb");

let db;
const connectionString = "mongodb+srv://xmamatqosimov_db_user:dTyfN7RH56ri4wta@cluster0.kigdam9.mongodb.net/";
mongodb.connect(connectionString, { useNewUrlParser: true, useUnifiedTopology: true }, (err, client) => {
    if (err) {
        console.log("error");
    }
    db = client.db("Reja");
    module.exports = {
        db: function () {
            return db
        },
    }
    console.log("mongoDB connection succeed");
    const app = require("./app");
    const server = http.createServer(app);
    let PORT = 3000;
    server.listen(PORT, function () {
        console.log("The server is running successfully on port: ", PORT, `http://localhost:${PORT}/`);
    });
})



