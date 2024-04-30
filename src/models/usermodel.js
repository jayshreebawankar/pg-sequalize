// const User = sequelize.define('User', {
//     name: {
//       type: Sequelize.STRING,
//       allowNull: false
//     },
//     email: {
//       type: Sequelize.STRING,
//       allowNull: false
//     }
//   });
  
//   // Sync all models with the database
//   async function syncModels() {
//     try {
//       await sequelize.sync({ force: true }); // Use { force: true } only in dev, as it will drop tables
//       console.log("All models were synchronized successfully.");
//     } catch (error) {
//       console.error('Error syncing models:', error);
//     }
//   }
  
//   syncModels();
  