const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('EventTicket', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    firstName: {
      type: DataTypes.STRING(255),
      allowNull: true,
      field: 'first_name'
    },
    lastName: {
      type: DataTypes.STRING(255),
      allowNull: true,
      field: 'last_name'
    },
    email: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    phone: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    homeAddress: {
      type: DataTypes.STRING(255),
      allowNull: true,
      field: 'home_address'
    },
    city: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    state: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    sex: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    town: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    quantity: {
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
    amount: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    eventDetailsId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: 'event_details_id'
    },
    status: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ticketInfoId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: 'ticket_info_id'
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
    paymentGateway: {
      type: DataTypes.STRING(225),
      allowNull: true,
      field: 'payment_gateway'
    },
    country: {
      type: DataTypes.STRING(225),
      allowNull: true
    },
    continent: {
      type: DataTypes.STRING(225),
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
    referralCode: {
      type: DataTypes.STRING(225),
      allowNull: true,
      field: 'referral_code'
    }
  }, {
    sequelize,
    tableName: 'event_ticket',
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
