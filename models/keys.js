const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Keys', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'user_id'
    },
    key: {
      type: DataTypes.STRING(40),
      allowNull: false,
      unique: "key"
    },
    level: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    ignoreLimits: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0,
      field: 'ignore_limits'
    },
    isPrivateKey: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0,
      field: 'is_private_key'
    },
    ipAddresses: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'ip_addresses'
    },
    dateCreated: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'date_created'
    }
  }, {
    sequelize,
    tableName: 'keys',
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
        name: "key",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "key" },
        ]
      },
      {
        name: "keys_user_id_fk",
        using: "BTREE",
        fields: [
          { name: "user_id" },
        ]
      },
    ]
  });
};
