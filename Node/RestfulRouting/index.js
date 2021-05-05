const express = require('express');
const app = express();
const path = require('path');
const methodOverride = require('method-override');

app.set("view engine", "ejs");
app.set("views", path.join(__dirname,'/views'));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));

const items = [
    {
       id : 1,
       username : "muskan",
       comment : "hi i am learning restful routing"
    },
    {
        id : 2,
        username : "shubham",
        comment : "hey muskan, you look beautiful"
    },
    {
        id : 3,
        username : "yashika",
        comment : "you guys look cute"
    },
    {
        id : 4,
        username : "vineet",
        comment : "yaaaar"
    }
]

//list all comments
app.get('/comments',(req,res)=>
{
    res.render('comments/index',{items});
})

//form for creating new comment
app.get('/comments/new',(req,res)=>
{
    res.render('comments/new'); //shows a form which has action post which send a post request to add a comment on /comments
})

//creates new comment
app.post('/comments',(req,res)=>
{
    const {username, comment} = req.body;
    const id = items.length+1;
    items.push({username, comment, id});
    res.redirect('/comments');
})

//show comment of the given id
app.get('/comments/:id',(req,res)=>
{   
    const { id } = req.params;
    const item = items.find(c=>c.id === parseInt(id));
    console.log(item)
    res.render('comments/show',{item});
})

// Get a form for editing comment
app.get('/comments/:id/edit', (req, res) => {
    const { id } = req.params;
    const foundComment = items.find(c => c.id === parseInt(id));
    
    res.render('comments/edit', { item: foundComment });
})

app.patch('/comments/:id', (req, res) => {
    
    const { id } = req.params;
    const foundComment = items.find(c => c.id === parseInt(id));

    const updatedCommentText = req.body.comment;
    
    console.log(updatedCommentText);

    foundComment.comment = updatedCommentText;

    res.redirect('/comments');
})

app.get('/',(req,res)=>
{
    res.send("this is the root route");
})


app.listen(3000, ()=>{
    console.log("server started at 3000");
})