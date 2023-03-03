const express = require("express");
const bodyParser = require("body-parser");

const app = express();
// while deploying to heroku write process.env.PORT
const PORT = 8080

app.set("views engine", "ejs");
// we have to use middlewear if taking anything static
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true}));

let plNames = ["javascript", "c++", "Java", "python", "Go", "c", "c#", "Rust"]

app.get("/", (req, res) => {
    res.status(200).render("index.ejs", {pageTitle: "Home Page", plNames:plNames});
    // res.send("hello World!"); 
});
app.post("/", (req, res) => {
    plNames.push(req.body.plNames);
    res.redirect("/");
});

app.get("/contact", (req, res) =>{
    res.status(200).render("contact.ejs", {pageTitle: "contact Page"});
});




app.listen(PORT, ()=> {
    console.log(`Server is running at port ${PORT}`);
});



