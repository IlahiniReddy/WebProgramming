var Product=require('../models/product');
var mongoose=require('mongoose');
mongoose.connect('mongodb://localhost:27017/shoppingcart',{useNewUrlParser:true});

var products=[
    new Product({
imagePath:'https://upload.wikimedia.org/wikipedia/commons/5/5e/Cadbury-Dairy-Milk-Caramel-Bar.jpg',
title:'Dairy milk',
description:'Caramel Bar',
price:200
}),
new Product({
    imagePath:'https://upload.wikimedia.org/wikipedia/commons/d/d8/NutellaCafe.jpg',
    title:'Nutella',
    description:'So Tasty!!',
    price:350
    }),
    new Product({
        imagePath:'https://www.missinthekitchen.com/wp-content/uploads/2013/02/8479050489_124111d33a_z.jpg',
        title:'Brookside',
        description:'Combo of three!!',
        price:500
        }),
        new Product({
            imagePath:'https://upload.wikimedia.org/wikipedia/commons/b/b6/Ferrero_Rocher.png',
            title:'Ferrero Rocher',
            description:'Awesome Chocolate!!',
            price:1000
            }),
            new Product({
                imagePath:'http://3.bp.blogspot.com/-n3CW2Lif8k4/TnNCyDgToKI/AAAAAAAAAH8/hatYstklPxA/s1600/P1080095.JPG',
                title:'Bournville',
                description:'Tastes great!!',
                price:100
                }),
];
var done=0;
for(var i=0;i<products.length;i++){
    products[i].save(function(err,result){
        done++;
        if(done===products.length){
            exit();
        }

    });
}
function exit(){
    mongoose.disconnect();
}