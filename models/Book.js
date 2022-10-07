const mongoose = require('mongoose');

const Book = mongoose.model('Book', {
    title: String,
    autor: String,
    isbn: String,
    resumo: String,
    ano_lancamento: String
})

module.exports = Book;