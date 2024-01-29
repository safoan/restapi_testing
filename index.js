const express = require("express");
const app = express ();
const pool = require("./db");

app.use(express.json()) //=> req body 


// get all todo method

app.get ('/todos', async(req,res) => {
    try {
        console.log(req.body);
    }
    catch{
        console.error(err.message);
    }
});

// get a todo
app.get ('/todos/id', async(req,res) => {
    try {

    }
    catch {
        console.error(err.message);
    }
})
// create a todo 

app.post("/todos/new" , async(req,res) => {
    try{
        const { description } = req.body;
        const newtodo = await pool.query(
            "INSERT INTO todo (description) VALUES ($1) RETURNING * "
            ,[description]
        );

        res.json(newtodo.rows);


    }catch (err){
        console.error(err.message);

    }

});

// update a todo 

app.put("/todos/id" , async(req,res) => {
    try{
        console.log(req.body);

    }catch (err){
        console.error(err.message);

    }

});

// Delet a todo 

app.delete("/todos/id" , async(req,res) => {
    try{
        console.log(req.body);

    }catch (err){
        console.error(err.message);

    }

});


// app listner
app.listen(3000, () => {
    console.log("server is runing in the port 3000 ")
});