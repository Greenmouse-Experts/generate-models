const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('FormDetails', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    title: {
      type: DataTypes.STRING(225),
      allowNull: false
    },
    identificationName: {
      type: DataTypes.STRING(225),
      allowNull: false,
      field: 'identification_name'
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    formData: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'form_data'
    },
    image: {
      type: DataTypes.STRING(225),
      allowNull: true
    },
    startingDate: {
      type: DataTypes.STRING(20),
      allowNull: true,
      field: 'starting_date'
    },
    closingDate: {
      type: DataTypes.STRING(20),
      allowNull: true,
      field: 'closing_date'
    },
    startingTime: {
      type: DataTypes.STRING(20),
      allowNull: true,
      field: 'starting_time'
    },
    closingTime: {
      type: DataTypes.STRING(20),
      allowNull: true,
      field: 'closing_time'
    },
    type: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    fee: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    organiserId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: 'organiser_id'
    },
    dateAdded: {
      type: DataTypes.DATE,
      allowNull: true,
      field: 'date_added'
    },
    emailNotification: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1,
      field: 'email_notification'
    },
    status: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    paymentGateway: {
      type: DataTypes.STRING(225),
      allowNull: true,
      defaultValue: "paystack",
      field: 'payment_gateway'
    },
    airtime: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 1
    },
    organiserProfileDisplay: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 1,
      field: 'organiser_profile_display'
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
    disabled: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    roqquPayment: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      field: 'roqqu_payment'
    },
    aimtoget: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    cashPayment: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      field: 'cash_payment'
    }
  }, {
    sequelize,
    tableName: 'form_details',
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
