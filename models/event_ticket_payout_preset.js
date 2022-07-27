const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('EventTicketPayoutPreset', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    paymentGatewayLocalTransaction: {
      type: DataTypes.FLOAT,
      allowNull: true,
      field: 'payment_gateway_local_transaction'
    },
    paymentGatewayInternationalTransaction: {
      type: DataTypes.FLOAT,
      allowNull: true,
      field: 'payment_gateway_international_transaction'
    },
    thirdPartyLocalTransaction: {
      type: DataTypes.STRING(225),
      allowNull: false,
      field: 'third_party_local_transaction'
    },
    thirdPartyInternationalTransaction: {
      type: DataTypes.FLOAT,
      allowNull: true,
      field: 'third_party_international_transaction'
    },
    thirdPartyUssdTransaction: {
      type: DataTypes.FLOAT,
      allowNull: true,
      field: 'third_party_ussd_transaction'
    },
    companyShareWebLocalTransaction: {
      type: DataTypes.FLOAT,
      allowNull: true,
      field: 'company_share_web_local_transaction'
    },
    companyShareWebInternationalTransaction: {
      type: DataTypes.FLOAT,
      allowNull: true,
      field: 'company_share_web_international_transaction'
    },
    companyShareUssdLocalTransaction: {
      type: DataTypes.FLOAT,
      allowNull: true,
      field: 'company_share_ussd_local_transaction'
    },
    paymentGatewayAirtimeTransaction: {
      type: DataTypes.FLOAT,
      allowNull: true,
      field: 'payment_gateway_airtime_transaction'
    },
    companyShareAirtimeTransaction: {
      type: DataTypes.FLOAT,
      allowNull: true,
      field: 'company_share_airtime_transaction'
    },
    thirdPartyAirtimeTransaction: {
      type: DataTypes.FLOAT,
      allowNull: true,
      field: 'third_party_airtime_transaction'
    },
    companyShareWebLocalTransactionCash: {
      type: DataTypes.FLOAT,
      allowNull: true,
      field: 'company_share_web_local_transaction_cash'
    },
    thirdPartyCashTransactionLocal: {
      type: DataTypes.FLOAT,
      allowNull: true,
      field: 'third_party_cash_transaction_local'
    },
    thirdPartyCashTransactionInternational: {
      type: DataTypes.FLOAT,
      allowNull: true,
      field: 'third_party_cash_transaction_international'
    },
    companyShareWebInternationalTransactionCash: {
      type: DataTypes.FLOAT,
      allowNull: true,
      field: 'company_share_web_international_transaction_cash'
    },
    amountAboveSetting: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1,
      field: 'amount_above_setting'
    },
    amountAbove: {
      type: DataTypes.FLOAT,
      allowNull: true,
      field: 'amount_above'
    },
    amountToDeduct: {
      type: DataTypes.FLOAT,
      allowNull: true,
      field: 'amount_to_deduct'
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
    tableName: 'event_ticket_payout_preset',
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
