
--get all the todo

select * from todo;

--get a todo 

select * from todo where id = $1 ;

--create a todo

INSERT INTO todo (description) VALUES ($1) RETURNING * ;

--update a todo 

UPDATE todo SET description = "string" WHERE "condition" RETURNING * ;

-- delet a todo

DELET from todo WHERE description = "string " ;
