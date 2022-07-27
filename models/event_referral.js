const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('EventReferral', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(225),
      allowNull: true
    },
    email: {
      type: DataTypes.STRING(225),
      allowNull: true
    },
    referralCode: {
      type: DataTypes.STRING(225),
      allowNull: true,
      field: 'referral_code'
    },
    created: {
      type: DataTypes.DATE,
      allowNull: true
    },
    eventId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: 'event_id'
    }
  }, {
    sequelize,
    tableName: 'event_referral',
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
