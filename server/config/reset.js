import { pool } from './database.js'
import './dotenv.js'
//Create tables to store the custom items and any other data for my web app to work with
const createCarsTable = async () => {
    const createTableQuery = `
    DROP TABLE IF EXISTS cars;

    CREATE TABLE IF NOT EXISTS cars (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        roof JSONB NOT NULL,
        exterior JSONB NOT NULL,
        wheels JSONB NOT NULL,
        accessories JSONB NOT NULL,
        price INT NOT NULL
    );
`
try{
    console.log("reached here")
    const res = await pool.query(createTableQuery)
    console.log("Cars table reated successfully!")
} catch (error){
    console.error("Error creating cars table:", error.message)
}
}

createCarsTable();