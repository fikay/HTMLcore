const mongoose = require("mongoose");
const restaurantModel = require("../models/menuSchema");
const seeds = require("./seeds");


//Connect to mongoDb
mongoose
  .connect("mongodb://127.0.0.1:27017/restaurant")
  .then(async () => {
    console.log("connection open");
  })
  .catch((err) => {
    console.log("Error Connecting");
    console.log(err);
  });


  const seedDb = async () => {
    console.log('here')
    await restaurantModel.deleteMany({});
    for (let i = 0; i < 30; i++) {
      const rand = Math.floor(Math.random() * 8);
      console.log(rand);
      const rate = Math.floor(Math.random() * 7);
      console.log(rate);
      const seeder = new restaurantModel({
        name: ` ${seeds[rand].name}`,
        price: `${rand}`,
        description: `${seeds[rand].description}`,
        rating: rate,
      });
      await seeder.save();
    }
  };

  seedDb();

   