const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TriviaPaymentRecord', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: 'user_id'
    },
    triviaId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: 'trivia_id'
    },
    email: {
      type: DataTypes.STRING(225),
      allowNull: true
    },
    name: {
      type: DataTypes.STRING(225),
      allowNull: true
    },
    reference: {
      type: DataTypes.STRING(225),
      allowNull: true
    },
    amount: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    status: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    dateAdded: {
      type: DataTypes.DATE,
      allowNull: true,
      field: 'date_added'
    },
    paymentGateway: {
      type: DataTypes.STRING(225),
      allowNull: true,
      field: 'payment_gateway'
    },
    channel: {
      type: DataTypes.STRING(225),
      allowNull: true
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
    dateUpdated: {
      type: DataTypes.DATE,
      allowNull: true,
      field: 'date_updated'
    },
    paymentMethod: {
      type: DataTypes.STRING(225),
      allowNull: true,
      defaultValue: "ONLINE",
      field: 'payment_method'
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
    phone: {
      type: DataTypes.STRING(225),
      allowNull: true
    },
    numberOfTimes: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: 'number_of_times'
    },
    remainder: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'trivia_payment_record',
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
