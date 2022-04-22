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
    axios
.get('http://api.weatherstack.com/current?access_key=336f9729f433c6b1bf9f9630f93bd171&query=Bursa')
.then(response => {
    var temperature = response.data.current.temperature
    var pressure = response.data.current.pressure
    var humidity = response.data.current.humidity
    var city = response.data.request.query

    res.write(city)
    res.write("Sıcaklık : " + temperature)
    res.write("Basınç : " + pressure)
    res.write("Nem : " + humidity)
    res.end();
})
    
.catch(error => {
  console.error(error)
})
})