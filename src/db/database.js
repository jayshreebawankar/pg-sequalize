const { Sequelize } = require('sequelize');

// Example Database URL
// postgresql://username:password@host:port/database
const databaseUrl = 'postgresql://postgres:jayshree@localhost:5432/demo';


// Replace the below connection details with your actual details
const sequelize = new Sequelize(databaseUrl, {
  dialect: 'postgres',
  logging: console.log,
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
