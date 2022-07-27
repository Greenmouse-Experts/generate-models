const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ReferralEarning', {
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
    productId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: 'product_id'
    },
    productType: {
      type: DataTypes.STRING(225),
      allowNull: false,
      field: 'product_type'
    },
    amount: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    dateAdded: {
      type: DataTypes.DATE,
      allowNull: true,
      field: 'date_added'
    },
    dateUpdated: {
      type: DataTypes.DATE,
      allowNull: true,
      field: 'date_updated'
    },
    status: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    referrerId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: 'referrer_id'
    }
  }, {
    sequelize,
    tableName: 'referral_earning',
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
