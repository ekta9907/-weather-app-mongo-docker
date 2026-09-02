const axios = require('axios');
const searchM = require('../models/search.js');

exports.getWeather =  async (req,res) =>{

    try {
    const city = req.params.city;
    const apiKey = process.env.WEATHER_API_KEY;
    await searchM.create({ city });

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
       // console.log(apiKey);
 //  console.log(city);

   // console.log(url);

    const response = await axios.get(url);


   // console.log(response.data);

    res.status(200).json({
        status: 1,
        message: "Fetched Successfully",
        data: response.data
    });

} catch (error) {

    console.log(error.response?.data || error.message);

    res.status(500).json({
        status: 0,
        message: "Weather API failed",
        data : error.response
    });
}

}

exports.getHistory = async (req,res) =>{

    const history =  await searchM 
    .find()
    .sort({
        createdAt : -1
    })
    .limit(10);
    res.json(history);
}

exports.getWeatherByLocation = async (req, res) => {

    try {
        console.log("hii");


        const { lat, lon } = req.query;
        console.log(req.query);
        const apiKey =
            process.env.WEATHER_API_KEY;

        const url =
            `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;

        const response =
            await axios.get(url);

        res.status(200).json({
            status: 1,
            data: response.data
        });

    } catch (error) {

        res.status(500).json({
            status: 0,
            message: "Unable to fetch weather"
        });
    }
};