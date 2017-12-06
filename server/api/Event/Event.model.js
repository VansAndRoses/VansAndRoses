const mongoose = require("mongoose");
const Schema   = mongoose.Schema;
const TYPES = require('./Trip-types');

const eventSchema = new Schema({
  name: String,
  creator: {
      type: Schema.Types.ObjectId,
      ref: 'User'
    },
  participants: [],
  description: String,
  tripId: {
      type: Schema.Types.ObjectId,
      ref: 'Trip'
    },
  startDate: Date,
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});
const Event = mongoose.model("Event", eventSchema);
module.exports = Event;
