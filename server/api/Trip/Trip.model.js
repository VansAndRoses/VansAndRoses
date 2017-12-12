const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const TYPES = require('../Trip-types');

const tripSchema = new Schema({
  title: {  type: String},
  itinerations: [{type: Schema.Types.ObjectId, ref: 'Itineration',}],
  description: {type: String},
  category: {type: String,enum: TYPES},
  creator: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  average:{
    type: Number,
    default:0
  },
  quantityReviews: {
    type: Number,
    default:0
  },
  duration: Number,
  location: String,
  locationOfStart: {
    latitude: Number,
    longitude: Number,
  },
  locationOfEnd: {
    latitude: Number,
    longitude: Number
  },

  options: {
    animals: Boolean,
    kids: Boolean
  },
  image: {
   type: String, default: ''
 },
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});

module.exports = mongoose.model('Trip', tripSchema);
