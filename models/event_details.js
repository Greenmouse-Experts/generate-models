const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('EventDetails', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    title: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    identificationName: {
      type: DataTypes.STRING(255),
      allowNull: true,
      field: 'identification_name'
    },
    image: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    organisersId: {
      type: DataTypes.STRING(100),
      allowNull: true,
      field: 'organisers_id'
    },
    dateAdded: {
      type: DataTypes.STRING(20),
      allowNull: true,
      field: 'date_added'
    },
    startingDate: {
      type: DataTypes.STRING(255),
      allowNull: true,
      field: 'starting_date'
    },
    closingDate: {
      type: DataTypes.STRING(200),
      allowNull: true,
      field: 'closing_date'
    },
    startingTime: {
      type: DataTypes.STRING(255),
      allowNull: true,
      field: 'starting_time'
    },
    closingTime: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'closing_time'
    },
    location: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    organiserName: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'organiser_name'
    },
    venue: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    totalTickets: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: 'total_tickets'
    },
    bookedTickets: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: 'booked_tickets'
    },
    ticketStatus: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1,
      field: 'ticket_status'
    },
    status: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1
    },
    price: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    eventCategoryId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: 'event_category_id'
    },
    eventTypeId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: 'event_type_id'
    },
    emailNotification: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 1,
      field: 'email_notification'
    },
    state: {
      type: DataTypes.STRING(225),
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
    country: {
      type: DataTypes.STRING(225),
      allowNull: true
    },
    city: {
      type: DataTypes.STRING(225),
      allowNull: true
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
    tableName: 'event_details',
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
