const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const reviewSchema = new Schema({
  from : { type: Schema.Types.ObjectId, ref: 'User', required: true },
  to: { type: Schema.Types.ObjectId, ref: 'Trip', required: true },
  text : String,
  rating: {
    type: Number,
    required: true
    },
  }, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});

module.exports = mongoose.model('Review', reviewSchema);
