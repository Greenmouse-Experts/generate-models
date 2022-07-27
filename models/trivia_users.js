const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TriviaUsers', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    email: {
      type: DataTypes.STRING(225),
      allowNull: true
    },
    name: {
      type: DataTypes.STRING(225),
      allowNull: true
    },
    phone: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    address: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    city: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    state: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    country: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    dateAdded: {
      type: DataTypes.DATE,
      allowNull: true,
      field: 'date_added'
    },
    dateUpdated: {
      type: DataTypes.DATE,
      allowNull: true,
      field: 'date_updated'
    },
    token: {
      type: DataTypes.STRING(225),
      allowNull: true
    },
    dateTokenAdded: {
      type: DataTypes.DATE,
      allowNull: true,
      field: 'date_token_added'
    },
    dateTokenExpired: {
      type: DataTypes.DATE,
      allowNull: true,
      field: 'date_token_expired'
    }
  }, {
    sequelize,
    tableName: 'trivia_users',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
