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
        const $ = cheerio.load(html)
        const coins = []
        $('.coin-name', html).each(function() {
            const coin = $(this).data('sort')
            coins.push({
                coin
            })
        })
        console.log(coins)
    })

app.listen(PORT, ()=> console.log(`Server running on PORT ${PORT}`))