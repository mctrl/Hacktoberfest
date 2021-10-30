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
        $('table tbody tr', html).each(function() {
           
            const number = $(this).find(".table-number").text().trim()
            const coin = $(this).find(".coin-name").data("sort")
            const price = $(this).find(".td-price").text().trim()
            const onehrchange = $(this).find(".change1h").data("sort").toFixed(2)
            const tfourhrchange = $(this).find(".change24h").data("sort").toFixed(2)
            const sdaychange = $(this).find(".change7d").data("sort").toFixed(2)
            const sevendayimage = $(this).find(".pl-2 img").data("src")
            
            if (coin == undefined) {
                // return
            }
            coins.push({
                number,
                coin,
                price,
                onehrchange,
                tfourhrchange,
                sdaychange,
                sevendayimage

            })
        })
        console.table(coins)
    }).catch(err => console.log(err))

app.listen(PORT, ()=> console.log(`Server running on PORT ${PORT}`))