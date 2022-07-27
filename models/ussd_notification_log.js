const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('UssdNotificationLog', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    sessionId: {
      type: DataTypes.STRING(255),
      allowNull: true,
      field: 'SessionID'
    },
    sourceBankCode: {
      type: DataTypes.STRING(255),
      allowNull: true,
      field: 'SourceBankCode'
    },
    channelCode: {
      type: DataTypes.STRING(255),
      allowNull: true,
      field: 'ChannelCode'
    },
    customerName: {
      type: DataTypes.STRING(255),
      allowNull: true,
      field: 'CustomerName'
    },
    customerAccountNumber: {
      type: DataTypes.STRING(255),
      allowNull: true,
      field: 'CustomerAccountNumber'
    },
    billerId: {
      type: DataTypes.STRING(255),
      allowNull: true,
      field: 'BillerID'
    },
    billerName: {
      type: DataTypes.STRING(255),
      allowNull: true,
      field: 'BillerName'
    },
    productId: {
      type: DataTypes.STRING(255),
      allowNull: true,
      field: 'ProductID'
    },
    productName: {
      type: DataTypes.STRING(255),
      allowNull: true,
      field: 'ProductName'
    },
    amount: {
      type: DataTypes.STRING(255),
      allowNull: true,
      field: 'Amount'
    },
    totalAmount: {
      type: DataTypes.STRING(255),
      allowNull: true,
      field: 'TotalAmount'
    },
    fee: {
      type: DataTypes.STRING(255),
      allowNull: true,
      field: 'Fee'
    },
    transactionFeeBearer: {
      type: DataTypes.STRING(255),
      allowNull: true,
      field: 'TransactionFeeBearer'
    },
    splitType: {
      type: DataTypes.STRING(255),
      allowNull: true,
      field: 'SplitType'
    },
    destinationBankCode: {
      type: DataTypes.STRING(255),
      allowNull: true,
      field: 'DestinationBankCode'
    },
    narration: {
      type: DataTypes.STRING(255),
      allowNull: true,
      field: 'Narration'
    },
    paymentReference: {
      type: DataTypes.STRING(255),
      allowNull: true,
      field: 'PaymentReference'
    },
    transactionInitiatedDate: {
      type: DataTypes.STRING(255),
      allowNull: true,
      field: 'TransactionInitiatedDate'
    },
    transactionApprovalDate: {
      type: DataTypes.STRING(255),
      allowNull: true,
      field: 'TransactionApprovalDate'
    },
    phoneNumber: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    email: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: true,
      field: 'Name'
    },
    dateAdded: {
      type: DataTypes.STRING(200),
      allowNull: true,
      field: 'date_added'
    }
  }, {
    sequelize,
    tableName: 'ussd_notification_log',
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
