const mongoose = require('mongoose');
require("dotenv/config");

const Cheese = require('./models/Cheese.model')

const cheeses = [
 {
          "id":100,
          "matches": [210, 208],
          "name":"Chevre",
          "country":"France",
          "type":"soft, semi-soft",
          "texture":"firm, soft",
          "flavor":"earthy, tangy, tart",
          "image":"https://cheese.com/media/img/cheese/Goats_cheese.jpg",
          "about":"Chevre is French for Goat’s cheese i.e. cheeses made out of goat’s milk.  Goat cheeses have a unique, tart, earthy flavour that sets them apart from cow cheeses.  This distinctive tang and aroma grow robust and bold as it ages. Chevres are excellent dessert cheeses, often served as snacks or before dinner drinks."
       },
       {
          "id":101,
          "matches":[201,203],
          "name":"Brie",
          "country":"France",
          "type":"soft",
          "texture":"buttery, runny",
          "flavor":"fruity, mild, nutty, tangy",
          "image":"https://cheese.com/media/img/cheese/Brie_PDCo3RG.jpg",
          "about":"Brie is the best known French cheese and has the nickname The Queen of Cheese. Brie is a soft cheese named after the French region Brie, where it was originally created. Several hundred years ago, Brie was one of the tributes which had to be paid to the French kings.Brie, one of the great dessert cheeses, comes as either a 1 or 2-kilogram wheel and is packed in a wooden box. In order to enjoy the taste fully, Brie must be served at room temperature."
       },
       {
          "id":102,
          "matches":[202, 204],
          "name":"Camembert",
          "country":"France",
          "type":"soft, artisan",
          "texture":"chalky, runny, smooth, soft, soft-ripened, supple",
          "flavor":"buttery, creamy, milky, sweet",
          "image":"https://cheese.com/media/img/cheese/Camembert.jpg",
          "about":"The fresh Camembert cheese is bland, hard and crumbly in texture. Young Camembert has a milky and sweet taste. As the cheese matures it forms a smooth, runny interior and a white bloomy rind that is typical to Camenbert cheese. It has a rich, buttery flavour. The best of them is the Camembert Le Châtelain.This cheese is best paired with a light red wine such as Beaujolais, Chenin Blanc, St Emilion, St Estephe or traditionally a glass of Normandy cider."
       },
       {
          "id":103,
          "matches":[202, 206],
          "name":"Crottin",
          "country":"USA",
          "type":"semi-soft, artisan",
          "texture":"creamy",
          "flavor":"nutty, tangy",
          "image":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUFbfDqV5qz_k5SOTcJCIlvD2SMF83JWnvqg&usqp=CAU",
          "about":"Crottin is a fresh pasteurized goat's milk cheese. The fully-aged cheese has a marble-like texture while the taste is tangy and pleasant with a long and nutty finish. Crottin pairs well with white Burgundy." 
     },
     {
         "id":104,
         "matches":[207, 209, 202],
         "name":"Mozzarella",
         "country":"Italy",
         "type":"semi-soft",
         "texture":"springy, stringy, supple",
         "flavor":"milky",
         "image":"https://cheese.com/media/img/cheese/Mozzarella.jpg",
         "about":"Mozzarella cheese is a sliceable curd cheese originating in Italy. Traditional Mozzarella cheese is made from milk of water buffalos herded in very few countries such as Italy and Bulgaria. As a result, most of the Mozzarella cheeses available now are made from cow's milk. An Italian Traditional Specialty Guaranteed (TSG) food product, Mozzarella cheese is not aged like most cheeses. It is eaten fresh and within a few hours after it is made."
     },
     {
         "id":105,
         "matches":[203, 205],
         "name":"Havarti",
         "country":"USA",
         "type":"semi-soft, semi-hard",
         "texture":"buttery",
         "flavor":"buttery, creamy",
         "image":"",
         "about":"Havarti is a fresh, semi-soft cheese made using pasteurized cultured milk, cream and natural ingredients. The cheese is rich and creamy in flavour. The cheese can be mild to sharp in flavour and buttery depending on its aging. Havarti is a tablecheese which can be sliced or grilled and can be served with fruit and wine. "
     },
     {             
         "id":106,
         "matches":[210, 206],
         "name":"Young Cheddar",
         "coyntry":"England",
         "type":"semi-hard, artisan",
         "texture":"compact, crumbly",
         "flavor":"creamy, sharp",
         "image":"https://cheese.com/media/img/cheese/wiki/cheddar.jpg",
         "about":"Cheddar cheese, the most widely purchased and eaten cheese globally, is always made from cow's milk. It is a hard cheese with a slightly crumbly texture if properly cured, and if it is too young, the texture is smooth. It gets a sharper taste as it matures."
     },
     {          
        "id":107,
        "matches":[211,212],
        "name":"Gruyere",
        "country":"Swizerland",
        "type":"semi-hard",
        "texture":"compact",
        "flavor":"sweet",
        "image":"https://cheese.com/media/img/cheese/LE_GRUYERE_AOP.jpg",
        "about":"Le Gruyère AOP (or simply Gruyere) is named after a Swiss village. It is traditional, creamery, unpasteurised, hard cheese.When young, it is creamy and nutty but after maturation, the texture becomes earthy and complex with small cracks and grainy."
    },
    {          
        "id":108,
        "matches":[205, 208],
        "name":"Monterey Jack",
        "country":"Mexico and USA",
        "type":"semi-hard",
        "texture":"compact, creamy firm, supple",
        "flavor":"buttery and mild",
        "image":"https://cheese.com/media/img/cheese/grated_cheese_2.jpg",
        "about":"The cheese is commonly used in Mexican and Spanish cuisine because it is mild in flavour and melts really well. It is similarin taste and texture to Colby and Cheddar. Consider Pinot Noir and Riesling with this cheese."
    },
    {
        "id":109,
        "matches":[206, 203],
        "name":"Manchego",
        "country":"Spain",
        "type":"semi-hard",
        "texture":"firm, supple",
        "flavor":"fruity, nuttym sweet, tangy",
        "image":"https://cheese.com/media/img/cheese/334_manchego.jpg",
        "about":"The Manchego cheese is produced in the La Mancha region of Spain, which is also home to Don Quixote. It is made from pasteurized sheep's milk. It is one of the popular cheeses from Spain. Manchego cheeses are best paired with sherry."
     },
     {
        "id":110,
        "matches":[200, 201],
        "name":"Comté",
        "country":"France",
        "type":"hard",
        "texture":"dense, firm, grainy, smooth,supple",
        "flavor":"fruity, nutty, salty, savory, smokey, sweet",
        "image":"https://cheese.com/media/img/cheese/600-comte.jpg",
        "about":"Comté is a French cheese produced in the Jura Massif region of Eastern France. Considered one of the finest cheeses in the world, a wedge of Comte reveals a pale yellow interior and a texture that can vary from silky, flabby to crystalline. Its ability to melt easily means Comté goes well with many recipes right from fondues to Croque Monsieur. The cheese pairs well with Rhone reds, a Palo Cortado or off-dry Amontillado sherry from Spain."
    },
    {
        "id":111,
        "matches": [207, 209],
        "name":"Cheshire",
        "country":"England and UK",
        "type":"hard",
        "texture":"crumbly, dense",
        "flavor":"full flavored, mild, milk, tangy",
        "image":"https://cheese.com/media/img/cheese/Cheshire_Cheese.jpg",
        "about":"Cheshire is a British cheese produced in the English counties of Cheshire and the neighbouring four counties of Denbighshire, Flintshire, Shropshire and Staffordshire. heshire with its lower salt content makes for a perfect crumble on fruits, chutney, and vegetable and baked dishes."
    },           
        
    {
        "id":112,
        "matches":[204, 209],
        "name":"Parmigiano Reggiano",
        "country":"Italy",
        "type":"hard, artisan",
        "texture":"crystaline, dense, grainy",
        "flavor":"fruity, nutty, savory, sharp ",
        "image":"https://cheese.com/media/img/cheese/Parmesan_1.jpg",
        "about":"The Parmigiano Reggiano or Parmesan cheese as it is called in English is considered to be among the top cheeses by cheese connoisseurs.Parmigiano Reggiano cheese is mostly grated over pastas, used in soups and risottos. It is also eaten on its own as a snack."
    },
    {
        "id":113,
        "matches":[200, 210],
         "name":"Asiago",
         "country":"Italy",
         "type":"hard",
         "texture":"compact, crumbly, smooth",
         "flavor":"full-floavored, mild, milky, sharp",
         "image":"https://cheese.com/media/img/cheese/asiago_it.jpg",
         "about":"Asiago is a cow's milk cheese produced only on the Asiago plateau in the Veneto foothills in Italy. The cheese-making tradition in the provinces of Vicenza and Trento dates back to more than a thousand years.Based on the ageing, Asiago can be used for grating, melting, and slicing on various salads, sandwiches, soups, pasta, and sauces."
     },
     {
        "id":114,
        "matches":[208, 202],
        "name":"Pecorino",
        "country":"Italy",
        "type":"hard",
        "texture":"creamy, crumbly, firm,",
        "flavor":"buttery, mild, nutty",
        "image":"Pecorino is the name of all Italian cheeses made from sheep's milk. Pecorinos are traditional, creamery, hard, drum-shaped cheese. They come in a variety of flavours depending on the ageing period. Pecorino is a preferred cheese in many kinds of pasta and an obvious choice in Italian regions where the cheese is produced. Also, it served as a good substitute for the expensive Parmigiano-Reggiano. "
     }
  ];



Cheese.create(cheeses)
.then(function(results){
    console.log("Cheese Saved", results)
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









