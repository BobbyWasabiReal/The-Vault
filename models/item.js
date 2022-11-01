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

const itemSchema = new Schema({
    itemImg: {
        // I have no clue what type it is
        type: String,
        required: true
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
    description: {
        type: String,
        required: true
    },
    reviews: [reviewSchema],
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        // required: true
    },
        userName: String,
        userAvatar: String
});

module.exports = mongoose.model('Item', itemSchema);