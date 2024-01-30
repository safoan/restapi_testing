// main app file 


const express = require("express");
const app = express ();
const routes = require ("./routes");

// request for the api endpoint file


app.use('/api',routes) //=> req body 



// app listner

app.listen(3000, () => {
    console.log("server is runing in the port 3000 ")
});