const PORT = 8000
const { default: axios } = require("axios");
const axis = require("axios")
const cheerio = require("cheerio");
const { response } = require("express");
const express = require("express")

const app = express();

const URL = "https://www.coingecko.com/en"

axios(URL)
    .then(response => {
        const html = response.data
        console.log(html)
    })

app.listen(PORT, ()=> console.log(`Server running on PORT ${PORT}`))