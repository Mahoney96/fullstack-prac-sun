require ('dotenv').config();
const express = require('express');
const massive = require('massive');
const { CONNECTION_STRING} = process.env
const ctrl = require('./../controllers/controllers');
const { Database } = require('massive');
const app = express()
const port = 4000;
app.use(express.json())


massive ({
    connectionString: CONNECTION_STRING,
    ssl: {rejectUnathorized: false}
}).then(db => {
        app.set('db', db)
        console.log("Database is connected")
    }).catch(err=> console.log("Err connecting to DB/massive!", err))


    



app.listen(port, () =>console.log(`Hey Hey, Your Port, Works Today!! ${port}`))

