const axios = require("axios")

.get('http://api.weatherstack.com/current?access_key=336f9729f433c6b1bf9f9630f93bd171&query=New%20York')
.then(res => {
    sicaklik = res.data.current.temperature
    basinc = res.data.current.pressure
    nem = res.data.current.humidity
})
.catch(error => {
  console.error(error)
})