const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Logs', {
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
    method: {
      type: DataTypes.ENUM('get','post','options','put','patch','delete'),
      allowNull: false
    },
    params: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    ipAddress: {
      type: DataTypes.STRING(45),
      allowNull: false,
      field: 'ip_address'
    },
    time: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    rtime: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    authorized: {
      type: DataTypes.STRING(1),
      allowNull: false
    },
    responseCode: {
      type: DataTypes.SMALLINT,
      allowNull: true,
      defaultValue: 0,
      field: 'response_code'
    }
  }, {
    sequelize,
    tableName: 'logs',
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
