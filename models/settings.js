const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Settings', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    frontEndDisplayType: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      field: 'front_end_display_type'
    },
    dateAdded: {
      type: DataTypes.STRING(200),
      allowNull: true,
      field: 'date_added'
    },
    votingDetailsId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: 'voting_details_id'
    },
    status: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1
    }
  }, {
    sequelize,
    tableName: 'settings',
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
