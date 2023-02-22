const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const flightSchema = new Schema ({
    airline: { type: String, required: true, enum: ['American', 'Southwest', 'United'] },
    airport: { type: String, required: true, enum: ['DEN','AUS', 'DFW', 'LAX', 'SAN']}, //after enum default: 'DEN'
    flightNo: { type: Number, required: true, min:10, max:9999 },
    departs:{
        type: Date,
        default: function() {
          const presentDate = new Date();
          const presentDateCopy = new Date(presentDate);
          presentDateCopy.setFullYear(presentDateCopy.getFullYear() + 1);
          return presentDateCopy;
        }
    }
}, {
    timestamp: true
});

module.exports = mongoose.model('Flight', flightSchema);