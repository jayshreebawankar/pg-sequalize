const express = require('express');
const bodyParser = require('body-parser');
require('./src/db/database');
const route = require('./src/routes/user.routes');

const app = express();
const port = 3000;

app.use(bodyParser.json());

//routes
app.use('/', route);

app.listen(port, async () => {
  console.log(`Server running on http://localhost:${port}`);
  try {
   
    // await sequelize.sync(); // Sync models
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
});
