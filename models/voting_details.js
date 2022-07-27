const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('VotingDetails', {
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
    status: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 1
    },
    fee: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    category: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    resultPercentage: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 1,
      field: 'result_percentage'
    },
    resultNumbers: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      field: 'result_numbers'
    },
    cashPayment: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 1,
      field: 'cash_payment'
    },
    dailyLimitSetting: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      field: 'daily_limit_setting'
    },
    dailyLimit: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: 'daily_limit'
    },
    viewContestantProfileSetting: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      field: 'view_contestant_profile_setting'
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
    showGraph: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      field: 'show_graph'
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
    packagedAmount: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      field: 'packaged_amount'
    },
    amountPackages: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'amount_packages'
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
    }
  }, {
    sequelize,
    tableName: 'voting_details',
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
