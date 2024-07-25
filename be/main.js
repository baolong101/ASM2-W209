import express from 'express';
import cors from 'cors'; // Import cors
import connectdb from './database/connect.js';
import router from './router/product.js';

const app = express();
const port = 4200;

// Enable CORS for specific origin
app.use(cors({
    origin: 'http://localhost:5173' // Allow requests from this origin
}));

app.use(express.json());
app.use('/api', router);

app.listen(port, async () => {
    await connectdb();
    console.log(`Endpoint http://localhost:${port}/api/products`);
});
