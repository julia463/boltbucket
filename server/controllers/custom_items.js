import { pool } from "../config/database.js";

//Add the functions to get, create, edit, and 
//delete cars from the custom items table

const getAllItems = async(req, res) => {
    console.log("reached get all items")
    //Make query to get all items to show them all
    try {
        const results = await pool.query('SELECT * FROM cars ORDER BY id ASC')
        res.status(200).json(results.rows)
    } catch (error){
        res.status(409).json({error:error.message})
    }
}
const getItem = async (req, res) => {
    ///Make query to get the car from the database
    try{
        const id = parseInt(req.params.id)
        const selectQuery = `
            SELECT name, roof, exterior, wheels, accessories, price
            FROM cars
            WHERE id=$1
        `
        const results = await pool.query(selectQuery,[id])
        res.status(200).json(results.rows[0])
    
        
       } catch (error){
            res.status(409).json({error: error.message})
       }
}

const createItem = async(req, res) => {
    const {name, roof, exterior, wheels, accessories, price} = req.body
    if(roof.Name == "Convertible" && accessories.Name == "Sanrio Car Wrap"){
       return res.status(409).json({error: "A convertible cannot have a wrap sorry"});
    }
    
    try{
        //Make query to add a car to the database
        const results = await pool.query(`
            INSERT INTO cars (name, roof, exterior, wheels, accessories, price)
            VALUES($1, $2, $3, $4, $5, $6)
            RETURNING *`,
            [name, roof, exterior, wheels, accessories, price]
        );
        res.status(201).json(results.rows[0])
    } catch (error){
        res.status(409).json({error: error.message})
    }

}
const editItem = async(req, res) => {
    //Make the query to edit a car
   try{
    const id = parseInt(req.params.id)
    const { name, roof, exterior, wheels, accessories} = req.body

    const results = await pool.query(`
        UPDATE cars SET name = $1, roof = $2, exterior = $3, wheels = $4, accessories = $5, price = $6 WHERE id = $7`,
        [name, roof, exterior, wheels, accessories]
        )
        res.status(200).json(results.rows[0])
   } catch (error){
        res.status(409).json({error: error.message})
   }
}
const deleteItem = async(req, res) => {
    //Make the query to delete the car here
    try{
        const id = parseInt(req.params.id)
       // const {id} = parseInt(req.params)
        const results = await pool.query('DELETE FROM cars WHERE id = $1 RETURNING *', [id])
        res.status(200).json(results.rows[0])
    } catch (error){
        res.status(409).json({error:error.message})
    }
}


export default {getAllItems, getItem, createItem, editItem, deleteItem}
