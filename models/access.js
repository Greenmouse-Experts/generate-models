const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Access', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    key: {
      type: DataTypes.STRING(40),
      allowNull: false
    },
    allAccess: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0,
      field: 'all_access'
    },
    controller: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    dateCreated: {
      type: DataTypes.DATE,
      allowNull: true,
      field: 'date_created'
    },
    dateModified: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.fn('current_timestamp'),
      field: 'date_modified'
    }
  }, {
    sequelize,
    tableName: 'access',
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
        name: "controller",
        using: "BTREE",
        fields: [
          { name: "controller" },
        ]
      },
      {
        name: "access_key_fk",
        using: "BTREE",
        fields: [
          { name: "key" },
        ]
      },
    ]
  });
};
