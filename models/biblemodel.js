const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
    chapter: {
        required: true,
        type: Number
    },
    verse: {
        required: true,
        type: Number
    },
    text: {
        required: true,
        type: String
    },
    book_name: {
        required: true,
        type: String
    }
})

module.exports = mongoose.model('bible_versechapters', dataSchema)
