import express from 'express';
import axios from 'axios';
import bodyParser from 'body-parser';

const app = express();
const port = 3000;

app.use(express.static("public"));

app.get('/', async (req, res) => {

    const options = {
    method: 'GET',
    url: 'https://youtube138.p.rapidapi.com/search/',
    params: {hl: 'en', gl: 'US',q: 'die for you'},
    headers: {
        'X-RapidAPI-Key': '845cc66072msh227ca0583c7da9fp193128jsn0a1921d8a182',
        'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
    }
    };

    try {
        const response = await axios.request(options);
        console.log(response.data.contents);
        res.render("index.ejs", {data: response.data.contents});
    } catch (error) {
        console.error(error);
    }
    
})

app.listen(port, (req, res) => {
    console.log("listening on port " + port);
});