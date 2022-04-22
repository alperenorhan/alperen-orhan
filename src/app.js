const express = require("express");
const axios = require("axios")
const app = express();
const weather = require("./utils/weather.js")

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log("Sunucu ayakta.")
});

app.get("/test_text", (req, res) => {
    res.write("19360859025");
    res.end();
})
app.get("/test_html", (req, res) => {
    res.write("<body><h1>Alperen ORHAN</h1></body>")
    res.end();
})
app.get("/test_json", (req, res) => {
    res.json({
        "ad": "Alperen",
        "soyad": "Orhan"
    })
})
app.get("/homepage", (req, res) => {
})
app.get("/test_geocode", (req, res) => {
})
app.get("/test_weather", (req, res) => {
    console.log("Sayfaya girildi.")
})