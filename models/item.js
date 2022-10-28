const mongoose = require('mongoose');
// Shortcut to the mongoose.Schema class
const Schema = mongoose.Schema;

const reviewSchema = new Schema({
    content: {
    type: String,
    required: true
    },
    rating: {
    type: Number,
    min: 1,
    max: 10,
    default: 10
    },
    user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
    },
    userName: String,
    userAvatar: String
    }, {
    timestamps: true
});

const movieSchema = new Schema({
    itemImg: {
        // I have no clue yet type it is
        type: String
    },
    item: {
        type: String,
        required: true
    },
    game: {
        type: String,
        required: true
    },
    upForTrade: {
        type: Boolean,
        default: false
    },
    itemLevel: {
        type: Number,
    },
    Description: {
        type: String,
        required: true
    },
    reviews: [reviewSchema]
    }, {
    timestamps: true
});

module.exports = mongoose.model('Movie', movieSchema);