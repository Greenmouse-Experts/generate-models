const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Notifications', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    organiserId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: 'organiser_id'
    },
    url: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    message: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    status: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    product: {
      type: DataTypes.STRING(225),
      allowNull: true
    },
    adminLevel: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      field: 'admin_level'
    },
    type: {
      type: DataTypes.STRING(225),
      allowNull: true
    },
    dateAdded: {
      type: DataTypes.DATE,
      allowNull: true,
      field: 'date_added'
    },
    dateSeen: {
      type: DataTypes.DATE,
      allowNull: true,
      field: 'date_seen'
    },
    dateUpdated: {
      type: DataTypes.DATE,
      allowNull: true,
      field: 'date_updated'
    }
  }, {
    sequelize,
    tableName: 'notifications',
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
