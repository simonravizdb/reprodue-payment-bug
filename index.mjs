// const express = require('express');
import express from 'express';
import cors from 'cors'

const app = express();
const PORT = 3000;

app.use(cors({
    origin: 'https://en.wikipedia.org/'
  }))

app.use(express.static('public'));

app.get('/', (req, res) => {

    res.send({object:'Hello World!'});
});

app.get('/redirect', (req, res) => {
	res.redirect('https://en.wikipedia.org/wiki/List_of_HTTP_status_codes')
})

app.listen(PORT, () => console.log(`Server listening on port: ${PORT}`));

