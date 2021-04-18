const express = require('express');
const app = express();

// console.log(app);
// app.use((req, res)=>{
//     // console.log("You made a request");
//     // console.log(req);
//     // res.send("hello from server");
//     res.send("<h1>this is http response from html</h1>")
// })
app.get('/', (req, res)=>{
    res.send("<h1>This is the root path </h1>")
});

app.get('/r/:subreddit', (req, res)=>{
    // console.log(req.params)
    // res.send("<h1>request with variable in url path</h1>") //path parameter
    const { subreddit } = req.params;
    res.send("<h1>request with variable in url path ${subreddit}</h1>")
});

app.get('/dogs', (req, res)=>{
    res.send("<h1>WOOF WOOF</h1>")
});

app.get('/cats', (req, res)=>{
    res.send("<h1>MEOWWWWWW</h1>")
});

app.post('/cats', (req, res)=>{
    res.send("<h1>MEOWWWWWW from post request</h1>")
});

app.get('*', (req, res)=>{
    res.send("<h1>invalid path</h1>")
});

app.listen(3000, ()=>{
    console.log("server listening on port 3000");
});