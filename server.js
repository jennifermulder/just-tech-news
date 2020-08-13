const express = require('express');
const routes = require('./routes/index.js');
//importing sequelize connection that is in connection.js
const sequelize = require('./config/connection');


const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// turn on routes
app.use(routes);

// turn on connection to db and server
//.sync mthod is sequalize taking the models and connecting them to associated database tables. IF it doesn't find one it will create one
//"force: true" will drop and re-create all database tables on startup
sequelize.sync({ force: true }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
}).catch(err => console.log(err))