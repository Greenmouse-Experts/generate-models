const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Airtimelog', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    body: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    mode: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    batchNumber: {
      type: DataTypes.STRING(225),
      allowNull: true,
      field: 'batch_number'
    },
    status: {
      type: DataTypes.STRING(225),
      allowNull: true
    },
    validatedAmount: {
      type: DataTypes.STRING(225),
      allowNull: true,
      field: 'validated_amount'
    },
    phone: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    network: {
      type: DataTypes.STRING(225),
      allowNull: true
    },
    cheetahpayReference: {
      type: DataTypes.STRING(225),
      allowNull: true,
      field: 'cheetahpay_reference'
    },
    transactionCharge: {
      type: DataTypes.STRING(225),
      allowNull: true,
      field: 'transaction_charge'
    },
    balanceBeforeTransaction: {
      type: DataTypes.STRING(225),
      allowNull: true,
      field: 'balance_before_transaction'
    },
    balanceAfterTransaction: {
      type: DataTypes.STRING(225),
      allowNull: true,
      field: 'balance_after_transaction'
    },
    dateAdded: {
      type: DataTypes.DATE,
      allowNull: true,
      field: 'date_added'
    }
  }, {
    sequelize,
    tableName: 'airtimelog',
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
