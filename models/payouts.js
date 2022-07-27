const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Payouts', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    productName: {
      type: DataTypes.STRING(225),
      allowNull: true,
      field: 'product_name'
    },
    productId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: 'product_id'
    },
    organiserId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: 'organiser_id'
    },
    requestedBy: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: 'requested_by'
    },
    paymentStatus: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      field: 'payment_status'
    },
    approvalStatus: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      field: 'approval_status'
    },
    amountPaid: {
      type: DataTypes.STRING(225),
      allowNull: true,
      field: 'amount_paid'
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
    }
  }, {
    sequelize,
    tableName: 'payouts',
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
