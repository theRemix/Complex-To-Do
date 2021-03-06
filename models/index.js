const fs = require('fs')
const path = require('path')
const { Sequelize, DataTypes } = require('sequelize')

const filebasename = path.basename(__filename)
const db = {}

const sequelize = new Sequelize('sqlite::memory:')

fs
  .readdirSync(__dirname)
  .filter((file) => {
    const returnFile = (file.indexOf('.') !== 0)
      && (file !== filebasename)
      && (file.slice(-3) === '.js')
    return returnFile
  })
  .forEach((file) => {
    const model = require(path.join(__dirname, file))(sequelize, DataTypes)
    db[model.name] = model
  })


Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db)
  }
});

db.sequelize = sequelize
db.Sequelize = Sequelize

const logging = process.env.ENV === 'production' ? false : console.log
const sequelizeOptions = { logging }

// Removes all tables and recreates them (only available if env is not in production)
if (process.env.DB_FORCE_RESTART === 'true' && process.env.ENV !== 'production') {
  sequelizeOptions.force = true
}

(async () => {
  await sequelize.sync();
  await db.Todo.create({
    description: 'First Item',
  });
})()

module.exports = db
