const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TriviaDetails', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    title: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    identificationName: {
      type: DataTypes.STRING(20),
      allowNull: true,
      field: 'identification_name'
    },
    organiserId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'organiser_id'
    },
    detail: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    instruction: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    image: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    duration: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    status: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1
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
    showResult: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      field: 'show_result'
    },
    showResultAnalysis: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      field: 'show_result_analysis'
    },
    backgroundImage: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: 'background_image'
    },
    backgroundSetting: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      field: 'background_setting'
    },
    startDateUtc: {
      type: DataTypes.DATE,
      allowNull: true,
      field: 'start_date_utc'
    },
    closingDateUtc: {
      type: DataTypes.DATE,
      allowNull: true,
      field: 'closing_date_utc'
    },
    timezone: {
      type: DataTypes.STRING(225),
      allowNull: true,
      defaultValue: "Africa\/Lagos"
    },
    autoSwitch: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      field: 'auto_switch'
    },
    type: {
      type: DataTypes.STRING(225),
      allowNull: true,
      defaultValue: "free"
    },
    fee: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    paymentGateway: {
      type: DataTypes.STRING(225),
      allowNull: true,
      defaultValue: "flutterwave",
      field: 'payment_gateway'
    },
    cashPayment: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 1,
      field: 'cash_payment'
    },
    airtimePayment: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      field: 'airtime_payment'
    },
    disabled: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    roqquPayment: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      field: 'roqqu_payment'
    },
    timesToAnswer: {
      type: DataTypes.STRING(225),
      allowNull: true,
      defaultValue: "1",
      field: 'times_to_answer'
    },
    aimtoget: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'trivia_details',
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
