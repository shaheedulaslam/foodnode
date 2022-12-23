var express = require('express');
var router = express.Router();


let card= []
card.push({src:"https://c.ndtvimg.com/2019-10/7g6mck6g_biryani-badshah_625x300_25_October_19.jpg",price:120})
card.push({src:"https://c.ndtvimg.com/2019-10/7g6mck6g_biryani-badshah_625x300_25_October_19.jpg",price:120})
card.push({src:"https://c.ndtvimg.com/2019-10/7g6mck6g_biryani-badshah_625x300_25_October_19.jpg",price:120})
card.push({src:"https://c.ndtvimg.com/2019-10/7g6mck6g_biryani-badshah_625x300_25_October_19.jpg",price:120})
card.push({src:"https://c.ndtvimg.com/2019-10/7g6mck6g_biryani-badshah_625x300_25_October_19.jpg",price:120})
card.push({src:"https://c.ndtvimg.com/2019-10/7g6mck6g_biryani-badshah_625x300_25_October_19.jpg",price:120})


/* GET home page. */
router.get('/', function(req, res, next) {
    if (req.session.index){
        console.log(req.session);
        console.log(card);
        res.render('home',{card})
    }else{
        res.redirect('/')
    }

});

module.exports = router;