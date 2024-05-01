// const { Sequelize } = require('sequelize');

// Example Database URL
// postgresql://username:password@host:port/database
const databaseUrl = 'postgresql://postgres:jayshree@localhost:5432/demo';


// // Replace the below connection details with your actual details
// const sequelize = new Sequelize(databaseUrl, {
//   dialect: 'postgres',
//   logging: console.log,
// });

const { Sequelize, DataTypes } = require("sequelize");


const sequelize = new Sequelize(databaseUrl, {
  dialect: "postgres",
  dialectOptions: {
    ssl: false,
  },
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
});

sequelize
  .authenticate()
  .then(() => {
    console.log("connected...🟢");
  })
  .catch((err) => {
    console.log("Error" + err);
    throw err;
  });

// (async function testConnection() {
//     try {
//       await sequelize.authenticate();
//       console.log('Connection has been established successfully : 5432');
//     } catch (error) {
//       console.error('Unable to connect to the database:', error);
//     }
//   })();

module.exports = sequelize;
