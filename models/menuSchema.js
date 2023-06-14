const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const Model = mongoose.model
const opts = { toJSON: { virtuals: true } };


const imageSchema = new Schema({
    url:String,
    filename:String
})

imageSchema.virtual("thumbnail").get(function () {
  return this.url.replace("/upload", "/upload/w_200");
});

const foodSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  rating:{
    type:Number
  },
  images:[imageSchema]
});

const restaurantModel = Model('restaurantModel', foodSchema)

module.exports = restaurantModel;