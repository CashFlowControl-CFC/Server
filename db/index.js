const Sequelize = require('sequelize')

const sequelize = new Sequelize('db_a9744c_nwallet', 'a9744c_nwallet','q1w2e3r4t5y6u7',{
    dialect:"mysql",
    host:"MYSQL5044.site4now.net"
})

const Account = require('./models/Account')(sequelize)
const Category = require('./models/Category')(sequelize)
const Goal = require('./models/Goal')(sequelize)
const Remainder = require('./models/Remainder')(sequelize)
const Transaction = require('./models/Transaction')(sequelize)
const User = require('./models/User')(sequelize)
const DefaultCategory = require('./models/DefaultCategory')(sequelize)
const Icon = require('./models/Icon')(sequelize)
const Tmp = require('./models/tmp')(sequelize)
Object.freeze(sequelize)
module.exports = {
    sequelize: sequelize,
    Account : Account,
    Category : Category,
    Goal : Goal,
    Remainder : Remainder,
    Transaction : Transaction,
    User : User,
    DefaultCategory:DefaultCategory,
    Icon:Icon,
    Tmp:Tmp

}
