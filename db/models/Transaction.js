const Sequelize = require('sequelize');

module.exports = function(sequelize){
    return sequelize.define('Transaction',{
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
          },
        category_id: {
            type: Sequelize.INTEGER,
            allowNull: false,
          },
        user_id: {
            type: Sequelize.INTEGER,
            allowNull: false,
          },
        date: {
            type: Sequelize.DATE,
            allowNull: false,
          },
        comment: {
            type: Sequelize.STRING,
            allowNull: false,
          },
        cash: {
            type: Sequelize.FLOAT,
            allowNull: false,
          },
        isIncome: {
            type: Sequelize.BOOLEAN,
            allowNull: false,
          }
      },
        {
          timestamps:false,
          tableName:'Transaction'
        });
}