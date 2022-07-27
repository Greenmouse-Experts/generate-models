const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TriviaUsersThatAnswered', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    triviaUserId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: 'trivia_user_id'
    },
    triviaId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: 'trivia_id'
    },
    dateAdded: {
      type: DataTypes.DATE,
      allowNull: true,
      field: 'date_added'
    }
  }, {
    sequelize,
    tableName: 'trivia_users_that_answered',
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
