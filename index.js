import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import routes from './src/routes/routes';
const { MONGODB } =  require('./config.js');
require('dotenv').config();

const PORT = process.env.PORT || 3000;
const DB = process.env.MONGODB || MONGODB;

const app = express();

// Database
mongoose.connect(DB, { useUnifiedTopology: true,  useNewUrlParser: true});

// Middleware to populate the req.body property with the parsed body 
app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());

// Routes
app.get('/', (req, res) => {
    res.send('This is the base page for the challendemic API');
});

routes(app);

// Start server
app.listen(PORT);
