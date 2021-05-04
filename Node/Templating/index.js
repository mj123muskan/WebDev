const express = require('express');
const app = express();
const path = require('path');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));
app.use(express.static('public'));

app.get('/', (req,res)=>{
    res.send('This is the root route');
});

app.get('/home', (req,res)=>{
    const name = 'muskan';
    res.render('home', {myname : name});
    //res.send("This is the home page");
});

app.get('/login', (req,res)=>{
    res.send("This is the login page");
});

app.get('/rand', (req, res) => {
    
    const num = Math.floor(Math.random() * 10 + 1);

    res.render('rand',{randomNum:num});
})

app.listen(3000, ()=>{
    console.log("server listening on port 3000");
});