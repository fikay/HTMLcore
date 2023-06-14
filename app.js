if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}
const express = require("express");
const app = express();
const ejsMate = require("ejs-mate");
const mongoose = require("mongoose");
const path = require("path");
const restaurantModel = require("./models/menuSchema");
const session = require("express-session");

mongoose
  .connect("mongodb://127.0.0.1:27017/restaurant")
  .then(() => {
    console.log("connection open");
  })
  .catch((err) => {
    console.log("Error Connecting");
    console.log(err);
  });

app.engine("ejs", ejsMate);
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.static(path.join(__dirname, "public")));
app.use(express.static(path.join(__dirname, "images")));

app.use(express.urlencoded({ extended: true }));


const sessionConfig = {
  secret: process.env.sessionSecret,
  resave: false,
  saveUninitialized: true,
  cookie: {
    httpOnly: true,
    expires: Date.now() + 3600000,
    maxAge: 3600000,
  },
};

app.use(session(sessionConfig))
app.listen(3000, () => {
  console.log("here");
});


app.get("/homepage", (req, res) => {
  res.render("restaurant/homePage");
});

app.get("/menu", async (req, res) => {
  const menuItems = await restaurantModel.find();
   if (!req.session.cart) {
     req.session.cart = [];
   }
  res.render("restaurant/menuPage", { menuItems });
});

app.post("/addTocart/:id", (req, res) => {
  // console.log(req.body)
  const{id} = req.params
 console.log(req.session.cart.length);
 if(req.session.cart.length === 0 )
 {
   req.session.cart.push(req.body)
 }
 else
 {
  let found = false;
   for(let item of req.session.cart )
   {
     if(item.id === id)
     {
      item.quantity = parseInt(item.quantity) + parseInt(req.body.quantity); 
      found = true;
      break;
     }
     
   }
   if (!found)
   {
    req.session.cart.push(req.body);
   }
 }

 console.log(req.session.cart);
  // console.log(req.session.cart)
   res.redirect("/menu");
});


app.get('/cart', (req, res)=>{
  const cart = req.session.cart
  console.log(cart)
  res.render("restaurant/cart", {cart})
})
