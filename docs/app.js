const express = require('express');

//express app
const app = express();

//register view engine
app.set('view engine', 'ejs')

//listen for requests
app.listen(300);

app.get('/', (req, res) => {
    res.render('index');
});

//redirects
app.get('/about-us', (req, res) => {
    res.render('about');
});

// 404 page
app.use((req, res) => {
    res.status(404).render('404')
})