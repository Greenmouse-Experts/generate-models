const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Roqquwebhooklog', {
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
    elfriqueReference: {
      type: DataTypes.STRING(225),
      allowNull: true,
      field: 'elfrique_reference'
    },
    roqquReference: {
      type: DataTypes.STRING(225),
      allowNull: true,
      field: 'roqqu_reference'
    },
    created: {
      type: DataTypes.DATE,
      allowNull: true
    },
    signature: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'roqquwebhooklog',
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
