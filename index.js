import express from 'express';
import { config } from 'dotenv';
import { connectDB } from './database/db.js'

import racipeRouter from './routes/racipe.js'
import categoryRouter from './routes/category.js'

const app = express();

config();
connectDB();

app.use(express.json());

// Mange all routes in diffrent file
app.use('/api/v1/racipe', racipeRouter);
app.use('/api/v1/category', categoryRouter);


app.get('/', (req, res, next) => {
    return res.send('<h1>Server is working </h1>')
})

app.listen(process.env.PORT, () => {
    console.log('Server is working on PORT ' + process.env.PORT)
});

