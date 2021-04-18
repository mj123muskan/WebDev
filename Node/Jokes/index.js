const jokes = require('give-me-a-joke');
const colors = require('colors');
const figlet = require('figlet');

jokes.getRandomCNJoke(function(joke){
  console.log(joke.rainbow); 
});

figlet("hello world", function(err, data){
    if(err)
    {
        console.log("something went wrong");
        console.dir(err);
        return;
    }
    console.log(data.rainbow);
})