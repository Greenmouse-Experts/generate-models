const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Airtimebatch', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    elfriqueReference: {
      type: DataTypes.STRING(225),
      allowNull: true,
      field: 'elfrique_reference'
    },
    cheetahpayReference: {
      type: DataTypes.STRING(225),
      allowNull: true,
      field: 'cheetahpay_reference'
    },
    batchNumber: {
      type: DataTypes.STRING(225),
      allowNull: true,
      field: 'batch_number'
    },
    status: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    userAmount: {
      type: DataTypes.FLOAT,
      allowNull: true,
      field: 'user_amount'
    },
    validatedAmount: {
      type: DataTypes.FLOAT,
      allowNull: true,
      field: 'validated_amount'
    },
    pin: {
      type: DataTypes.STRING(225),
      allowNull: true
    },
    network: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    mode: {
      type: DataTypes.STRING(225),
      allowNull: true
    },
    dateAdded: {
      type: DataTypes.DATE,
      allowNull: true,
      field: 'date_added'
    },
    confirmedOn: {
      type: DataTypes.DATE,
      allowNull: true,
      field: 'confirmed_on'
    },
    product: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    productAmount: {
      type: DataTypes.FLOAT,
      allowNull: true,
      field: 'product_amount'
    },
    depositorsPhoneNumber: {
      type: DataTypes.STRING(225),
      allowNull: true,
      field: 'depositors_phone_number'
    },
    modulePhoneNo: {
      type: DataTypes.STRING(225),
      allowNull: true,
      field: 'module_phone_no'
    },
    initialValidationMessage: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'initial_validation_message'
    },
    finalValidationMessage: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'final_validation_message'
    }
  }, {
    sequelize,
    tableName: 'airtimebatch',
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
