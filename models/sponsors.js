const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Sponsors', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    companyName: {
      type: DataTypes.STRING(255),
      allowNull: true,
      field: 'company_name'
    },
    image: {
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
    tableName: 'sponsors',
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
