const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Votes', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    votersName: {
      type: DataTypes.STRING(255),
      allowNull: true,
      field: 'voters_name'
    },
    votersEmail: {
      type: DataTypes.STRING(255),
      allowNull: true,
      field: 'voters_email'
    },
    votersPhone: {
      type: DataTypes.STRING(255),
      allowNull: true,
      field: 'voters_phone'
    },
    number: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    dateAdded: {
      type: DataTypes.STRING(200),
      allowNull: true,
      field: 'date_added'
    },
    reference: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    contestantId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: 'contestant_id'
    },
    votingDetailsId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: 'voting_details_id'
    },
    status: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    channel: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    paymentMethod: {
      type: DataTypes.STRING(225),
      allowNull: true,
      field: 'payment_method'
    },
    dayAdded: {
      type: DataTypes.STRING(20),
      allowNull: true,
      field: 'day_added'
    },
    country: {
      type: DataTypes.STRING(225),
      allowNull: true
    },
    state: {
      type: DataTypes.STRING(225),
      allowNull: true
    },
    continent: {
      type: DataTypes.STRING(225),
      allowNull: true
    },
    paymentGateway: {
      type: DataTypes.STRING(225),
      allowNull: true,
      field: 'payment_gateway'
    },
    amount: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    payuReference: {
      type: DataTypes.STRING(225),
      allowNull: true,
      field: 'payu_reference'
    },
    roqquReference: {
      type: DataTypes.STRING(255),
      allowNull: true,
      field: 'roqqu_reference'
    },
    gatewayResponseCode: {
      type: DataTypes.STRING(225),
      allowNull: true,
      field: 'gateway_response_code'
    },
    gatewayResponseDesc: {
      type: DataTypes.STRING(225),
      allowNull: true,
      field: 'gateway_response_desc'
    },
    isocode: {
      type: DataTypes.STRING(225),
      allowNull: true
    },
    convertedAmount: {
      type: DataTypes.STRING(225),
      allowNull: true,
      field: 'converted_amount'
    },
    fixAmount: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      field: 'fix_amount'
    },
    oldAmount: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      field: 'old_amount'
    },
    ip: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    currencyCode: {
      type: DataTypes.STRING(10),
      allowNull: true,
      field: 'currency_code'
    }
  }, {
    sequelize,
    tableName: 'votes',
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
