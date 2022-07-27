const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Info', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    detail: {
      type: DataTypes.STRING(255),
      allowNull: true
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
    }
  }, {
    sequelize,
    tableName: 'info',
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
