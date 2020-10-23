import express from 'express';
import routes from './src/routes/routes'
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
const { MONGODB } =  require('./config.js');

const PORT = process.env.PORT || 3000;

const app = express();

// Database
mongoose.connect(MONGODB, { useUnifiedTopology: true,  useNewUrlParser: true});

// Middleware to populate the req.body property with the parsed body 
app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());

routes(app);

 app.listen(PORT, ()=>{
     console.log(`Server is running on: http://localhost:${PORT}`);
 });
