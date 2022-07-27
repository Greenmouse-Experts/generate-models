const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Payuwebhooklog', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    body: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    created: {
      type: DataTypes.DATE,
      allowNull: true
    },
    payuReference: {
      type: DataTypes.STRING(225),
      allowNull: true,
      field: 'payu_reference'
    },
    elfriqueReference: {
      type: DataTypes.STRING(225),
      allowNull: true,
      field: 'elfrique_reference'
    }
  }, {
    sequelize,
    tableName: 'payuwebhooklog',
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
