const Sequelize = require('sequelize');

const sequelize = new Sequelize('db_a9744c_cfc', 'a9744c_cfc','moremore2578',{
    dialect:"mysql",
    host:"MYSQL5045.site4now.net"
})

const Account = require('./models/Account')(sequelize);
const Category = require('./models/Category')(sequelize);
const Goal = require('./models/Goal')(sequelize);
const Remainder = require('./models/Remainder')(sequelize);
const Transaction = require('./models/Transaction')(sequelize);
const User = require('./models/User')(sequelize);
Object.freeze(sequelize);
module.exports = {
    sequelize: sequelize,
    Account : Account,
    Category : Category,
    Goal : Goal,
    Remainder : Remainder,
    Transaction : Transaction,
    User : User,
}
