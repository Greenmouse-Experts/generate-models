const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Limits', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    apiKey: {
      type: DataTypes.STRING(40),
      allowNull: false,
      field: 'api_key'
    },
    uri: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    count: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    hourStarted: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'hour_started'
    }
  }, {
    sequelize,
    tableName: 'limits',
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
      {
        name: "uri",
        using: "BTREE",
        fields: [
          { name: "uri" },
        ]
      },
      {
        name: "limits_api_key_fk",
        using: "BTREE",
        fields: [
          { name: "api_key" },
        ]
      },
    ]
  });
};
