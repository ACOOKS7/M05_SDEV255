const express = require('express');

//express app
const app = express();

//register view engine
app.set('view engine', 'ejs');

//listen for request
app.listen(3000);

//sending html to the browser

app.get('/', (req, res) => {
    const blogs = [
        {title: 'Yoshi finds eggs', snippet:'Lorem ipsum dolor sit amet consectetur'},
        {title: 'Mario finds stars', snippet:'Lorem ipsum dolor sit amet consectetur'},
        {title: 'How to defeat Bowser', snippet:'Lorem ipsum dolor sit amet consectetur'},
    ];
    res.render('index',{title:'Home', blogs}
    );
    //res.send('<p>home page</p>');
});

app.get('/about', (req, res) => {
    res.render('about', {title:'About'});
    //res.send('<p>about page</p>');
});

app.get('/blogs/create', (req,res) => {
    res.render('create', {title:'Create Blog'});

})

//404 page (must go at bottom)
app.use((req,res) => {
    res.status(404).render('404', {title: '404'});

})