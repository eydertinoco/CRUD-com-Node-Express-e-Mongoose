require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const DB_USER = process.env.DB_USER;
const DB_PASSWORD = encodeURIComponent(process.env.DB_PASSWORD);
const app = express();

app.use(
    express.urlencoded({
        extended: true
    })
);

app.use(express.json());

// Rotas API
const bookRoutes = require('./routes/bookRoutes');
app.use('/book', bookRoutes);

app.get('/', (req, res) => {
    res.json({message: 'Oi Express!'})
})

mongoose.connect(`mongodb+srv://${DB_USER}:${DB_PASSWORD}@cluster0.bf6kvlp.mongodb.net/?retryWrites=true&w=majority`)
        .then(() => {
            console.log("Conectamos ao MongoDB");
            app.listen(3000)
        })
        .catch((err) => console.log(err))
