const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('VotesFix', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    voteId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'vote_id'
    },
    votingDetailsId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'voting_details_id'
    },
    reference: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    formerAmount: {
      type: DataTypes.FLOAT,
      allowNull: true,
      field: 'former_amount'
    },
    fixedAmount: {
      type: DataTypes.FLOAT,
      allowNull: true,
      field: 'fixed_amount'
    },
    convertedAmount: {
      type: DataTypes.FLOAT,
      allowNull: true,
      field: 'converted_amount'
    },
    correctConvertedAmount: {
      type: DataTypes.FLOAT,
      allowNull: true,
      field: 'correct_converted_amount'
    },
    number: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    numberFixed: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'number_fixed'
    },
    currency: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    created: {
      type: DataTypes.DATE,
      allowNull: true
    },
    userIp: {
      type: DataTypes.STRING(225),
      allowNull: true,
      field: 'user_ip'
    },
    dateAdded: {
      type: DataTypes.DATE,
      allowNull: true,
      field: 'date_added'
    },
    dateFixed: {
      type: DataTypes.DATE,
      allowNull: true,
      field: 'date_fixed'
    },
    updatedStatus: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      field: 'updated_status'
    }
  }, {
    sequelize,
    tableName: 'votes_fix',
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
