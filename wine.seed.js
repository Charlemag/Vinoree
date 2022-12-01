const mongoose = require('mongoose');
require("dotenv/config");

const Wine = require('./models/wine.model')

const wines = [
    {
        "id":200,
        "matches":[101, 105],
        "name":"Red Bordeaux Blends",
        "country":"France",
        "type":"Cabernet Sauvignon, Merlot",
        "texture":"Red Wine",
        "flavor":"Black Currant, Black Cherry, Pencil Lead, Loam, Tobacco",
        "image":"https://winefolly.com/images/wines/france/Red-Bordeaux-Blends.png",
        "about": ""
       },
       {
        "id":201,
        "matches":[115, 107],
        "name":"Northern Rhone Syrah",
        "country":"France",
        "type":"Syrah",
        "texture":"Red Wine",
        "flavor":"Olive, Plum, Black Pepper, Blackberry",
        "image":"https://winefolly.com/images/wines/france/Northern-Rhone-Syrah.png",
        "about": ""
       }, 
       {
        "id":202,
        "matches": [107, 112],
        "name":"Red Burgundy",
        "country":"France",
        "type":"Syrah",
        "texture":"Red Wine",
        "flavor":"Red Cherry, Hibiscus, Mushroom",
        "image":"https://winefolly.com/images/wines/france/Red-Burgundy.png",
        "about": ""
       },
       {   
        "id":203,
        "matches": [102, 108],
        "name":"Aglianico",
        "country":"Italy",
        "type":"",
        "texture":"Red Wine",
        "flavor":"White Pepper, Leather, Spiced Plum, Cherry",
        "image":"https://winefolly.com/images/wines/france/Red-Burgundy.png",
        "about": ""
       },
       {   
        "id":204,
        "matches":[104, 109],
        "name":"Chianti Classico",
        "country":"Italy",
        "type":"Syrah",
        "texture":"Red Wine",
        "flavor":"Preserved Cherry, Aged Blassamic",
        "image":"https://winefolly.com/images/wines/france/Red-Burgundy.png",
        "about": ""
       },
       {   
        "id":205,
        "matches":[105, 107],
        "name":"Chablis",
        "country":"France",
        "type":"Chardonnay",
        "texture":"White Wine",
        "flavor":"Starfruit, apple, White Blossom, Lemon, Chalk",
        "image":"https://winefolly.com/images/wines/france/Chablis.png",
        "about": ""
       },
       {   
        "id":206,
        "matches":[101, 105],
        "name":"White Burgundy",
        "country":"France",
        "type":"Syrah",
        "texture":"Red Wine",
        "flavor":"Red Cherry, Hibiscus, Mushroom",
        "image":"https://winefolly.com/images/wines/france/Red-Burgundy.png",
        "about": ""
       },
       {   
        "id":207,
        "matches":[110, 104],
        "name":"Pinot Grigio",
        "country":"Italy",
        "type":"Pinot Gris",
        "texture":"White Wine",
        "flavor":"Green Apple, Peach, Thyme, Lime, Zest Quice",
        "image":"https://winefolly.com/images/wines/italy/Pinot-Grigio.png",
        "about": ""
       },
       {   
        "id":208,
        "matches":[102, 106],
        "name":"Chardonnay",
        "country":"USA",
        "type":"Chardonnay",
        "texture":"White Wine",
        "flavor":"Yellow Apple, Pineapple, Creeme Brulee, Vanilla, Caramel",
        "image":"https://winefolly.com/images/wines/france/Red-Burgundy.png",
        "about": ""
       },
       {   
        "id":209,
        "matches":[107, 102],
        "name":"Pinot Noir",
        "country":"USA",
        "type":"Pinot Noir",
        "texture":"Red Wine",
        "flavor":"Blackberry, Clove, Rose, Cola ",
        "image":"https://winefolly.com/images/wines/france/Red-Burgundy.png",
        "about": ""
       },
       {   
        "id":210,
        "matches":[103, 108],
        "name":"Riesling",
        "country":"USA",
        "type":"",
        "texture":"White Wine",
        "flavor":"Ripe Peach, Yellow Apple, Lime, Lime Peel, Crushed Rocks",
        "image":"https://winefolly.com/images/wines/france/Red-Burgundy.png",
        "about": ""
       }
  ];



Wine.create(wines)
.then(function(results){
    console.log("Wines Saved", results)
    mongoose.connection.close()
})
.catch (function(error){
    console.log("Something went wrong", error.message)
    mongoose.connection.close()
})

mongoose
  .connect(process.env.MONGODB_URI)
  .then(x => console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`))
  .catch(err => console.error('Error connecting to mongo', err));
