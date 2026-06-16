const express =  require('express');
const router = express.Router();
const {getWeather,getHistory,getWeatherByLocation} = require('../controllers/search.js');

router.get("/weather/location",getWeatherByLocation);

router.get("/weather/:city",getWeather);
router.get('/history',getHistory);
module.exports =router ;