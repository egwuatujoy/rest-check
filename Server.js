import express from 'express'
import connectDB from './db/conn.js'
import dotenv from 'dotenv';
import userRoutes from './routes/user.js';

dotenv.config()

const app = express()
const PORT = 8080

connectDB()

app.use(express.json())

app.use('/users', userRoutes)


app.listen(PORT, () => {
    console.log(`Server Started on Port ${PORT}`)
})