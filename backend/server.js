//main server
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();
const sequelize = require('./config/db');



const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());



// Sync Database
sequelize.sync()
  .then(() => console.log('Database synchronized'))
  .catch(err => console.error(' Error syncing database:', err));

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started running on port ${PORT}`));
