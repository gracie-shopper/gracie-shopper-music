const Sequelize = require('sequelize')
const db = require('../db')

const Watch = db.define('watch', {
  make: {
    type: Sequelize.STRING,
    allowNull: false
  },
  model: {
    type: Sequelize.STRING,
    allowNull: false
  },
  complications: {
    type: Sequelize.TEXT
  },
  imageUrl: {
    type: Sequelize.STRING,
    defaultValue: 'http://bit.ly/2mwXQKu'
  },
  year: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  price: {
    type: Sequelize.INTEGER,
    allowNull: false,
    validate: {
      min: 0
    }
  },
  available: {
    type: Sequelize.BOOLEAN,
    defaultValue: true
  }
})

module.exports = Watch
