const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TriviaOptions', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    questionId: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'question_id'
    },
    image: {
      type: DataTypes.STRING(225),
      allowNull: true
    },
    name: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    option: {
      type: DataTypes.TEXT,
      allowNull: true
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
    }
  }, {
    sequelize,
    tableName: 'trivia_options',
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
