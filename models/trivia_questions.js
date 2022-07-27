const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TriviaQuestions', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    triviaId: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'trivia_id'
    },
    image: {
      type: DataTypes.STRING(225),
      allowNull: true
    },
    body: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    answer: {
      type: DataTypes.INTEGER,
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
    },
    triviaNature: {
      type: DataTypes.STRING(225),
      allowNull: true,
      defaultValue: "multichoice",
      field: 'trivia_nature'
    }
  }, {
    sequelize,
    tableName: 'trivia_questions',
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
