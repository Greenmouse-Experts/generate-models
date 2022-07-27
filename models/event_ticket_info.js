const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('EventTicketInfo', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    dateAdded: {
      type: DataTypes.STRING(50),
      allowNull: true,
      field: 'date_added'
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    price: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    salesStartDate: {
      type: DataTypes.STRING(225),
      allowNull: true,
      field: 'sales_start_date'
    },
    salesStartTime: {
      type: DataTypes.STRING(225),
      allowNull: true,
      field: 'sales_start_time'
    },
    salesEndDate: {
      type: DataTypes.STRING(225),
      allowNull: true,
      field: 'sales_end_date'
    },
    salesEndTime: {
      type: DataTypes.STRING(225),
      allowNull: true,
      field: 'sales_end_time'
    },
    showDescription: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: 'show_description'
    },
    eventId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: 'event_id'
    },
    booked: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    status: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 1
    }
  }, {
    sequelize,
    tableName: 'event_ticket_info',
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
