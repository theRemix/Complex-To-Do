const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {

  class Todo extends Model {

    static list = () => Todo.findAll()

    static read = id => Todo.findOne({ where: { id }})

    static update = (id, body) => Todo.update(body, { where: { id }})

  }

  Todo.init({
    description: DataTypes.STRING,
    done: DataTypes.BOOLEAN,
    completedAt: DataTypes.DATE,
  }, { sequelize })

  return Todo

}
