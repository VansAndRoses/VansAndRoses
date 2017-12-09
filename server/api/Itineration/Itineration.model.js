const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const itinerationSchema = new Schema({
  title: {
    type: String
  },
  description: {
    type: String
  },
  creator: {
    type: Schema.Types.ObjectId,
    ref: 'Trip'
  },
  locationOfStart: {
    latitude: Number,
    longitude: Number,
  },
  locationOfEnd: {
    latitude: Number,
    longitude: Number,
    description: String
  },
  placeToSleep: {
      latitude: Number,
      longitude: Number,
      description: String
    },
  placeToEat: {
      latitude: Number,
      longitude: Number,
      description: String
    },
  washingPlace: {
      latitude: Number,
      longitude: Number,
      description: String
    },
  photo: String,
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});

module.exports = mongoose.model('Itineration', itinerationSchema);
