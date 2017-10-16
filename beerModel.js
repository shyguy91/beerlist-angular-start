// [{ name: '512 IPA', style: 'IPA', image_url: 'http://bit.ly/1XtmB4d', abv: 5 },
// { name: '512 Pecan Porter', style: 'Porter', image_url: 'http://bit.ly/1Vk5xj4', abv: 4 }]
var mongoose = require('mongoose');

var beerSchema = new mongoose.Schema({
    name: { type: String },
    style: { type: String },
    image_url: { type: String },
    abv: { type: Number },
    ratings: [Number]
  });

var Beer = mongoose.model("Beer", beerSchema);

module.exports = Beer;