// routes file 

const express = require ('express') ;
const router = express.Router();
const pool = require("./db");


// api end points


// get all todo method

router.get ('/todos', async(req,res) => {
    try {

        const listtodo = await pool.query
        (" select * from todo ");

        res.json(listtodo.rows);
    }
    catch{
        console.error(err.message);
    }
});

// get a todo

router.get ('/todos/:id', async(req,res) => {
    try { 
        const {id} = req.params;
        const todoid = await pool.query
        ("select * from todo where todo_id = $1" , [id]);

        res.json(todoid.rows);

    }
    catch {
        console.error(err.message);
    }
});

// create a todo 

router.post("/todos/new" , async(req,res) => {
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

router.put("/todos/:id" , async(req,res) => {
    try{
        const {id} = req.params;
        const {description} = req.params;

        const updatetodo = await pool.query 
        (" UPDATE todo SET description =$1  WHERE todo_id = $2" ,[description,id]);

        res.json("update is done");

    }catch (err){
        console.error(err.message);

    }

});

// Delet a todo 

router.delete("/todos/:id" , async(req,res) => {
    try{
       const {id} = req.params;

       const delettodo = await pool.query(" DELETE from todo WHERE todo_id = $1" , [id]);

       res.json("delet is done");

    }catch (err){
        console.error(err.message);

    }

});


module.exports = router;
