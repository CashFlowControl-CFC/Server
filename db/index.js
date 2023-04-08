const Sequelize = require('sequelize');

const sequelize = new Sequelize('db_a9744c_cfc', 'a9744c_cfc','moremore2578',{
    dialect:"mysql",
    host:"MYSQL5045.site4now.net"
})

const Transaction = require('./models/Transaction')(sequelize);
Object.freeze(sequelize);
module.exports = {
    sequelize: sequelize,
    Transaction : Transaction
}
