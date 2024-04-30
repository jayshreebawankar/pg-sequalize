const { DataTypes } = require('sequelize');
const sequelize = require('../db/database');

const User = sequelize.define('User', {
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  }
}, {
  timestamps: true
});

// Sync all models with the database
(async function syncModels() {
  try {
    await sequelize.sync({ force: true }); // Use { force: true } only in dev, as it will drop tables
    console.log("All models were synchronized successfully.");
  } catch (error) {
    console.error('Error syncing models:', error);
  }
})();

module.exports = User;
