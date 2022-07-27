const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('FormResponse', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    email: {
      type: DataTypes.STRING(225),
      allowNull: false
    },
    amount: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    formId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: 'form_id'
    },
    formData: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'form_data'
    },
    reference: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    channel: {
      type: DataTypes.STRING(225),
      allowNull: false
    },
    paymentMethod: {
      type: DataTypes.STRING(100),
      allowNull: false,
      field: 'payment_method'
    },
    dateAdded: {
      type: DataTypes.DATE,
      allowNull: true,
      field: 'date_added'
    },
    status: {
      type: DataTypes.INTEGER,
      allowNull: true
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
    state: {
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
    }
  }, {
    sequelize,
    tableName: 'form_response',
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
