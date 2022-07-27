const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('EmailList', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    email: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    dateAdded: {
      type: DataTypes.STRING(225),
      allowNull: true,
      field: 'date_added'
    },
    name: {
      type: DataTypes.STRING(225),
      allowNull: true
    },
    promotional: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 1
    },
    hash: {
      type: DataTypes.STRING(225),
      allowNull: true
    },
    dateUpdated: {
      type: DataTypes.DATE,
      allowNull: true,
      field: 'date_updated'
    }
  }, {
    sequelize,
    tableName: 'email_list',
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
