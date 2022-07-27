const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Organisers', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    firstName: {
      type: DataTypes.STRING(255),
      allowNull: true,
      field: 'first_name'
    },
    lastName: {
      type: DataTypes.STRING(255),
      allowNull: true,
      field: 'last_name'
    },
    email: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    phone: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    accountName: {
      type: DataTypes.STRING(100),
      allowNull: true,
      field: 'account_name'
    },
    accountNumber: {
      type: DataTypes.STRING(100),
      allowNull: true,
      field: 'account_number'
    },
    bank: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    password: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    dateAdded: {
      type: DataTypes.STRING(100),
      allowNull: true,
      field: 'date_added'
    },
    socialLoginType: {
      type: DataTypes.STRING(200),
      allowNull: true,
      field: 'social_login_type'
    },
    gender: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    socialPictureLink: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'social_picture_link'
    },
    passwordResetToken: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'password_reset_token'
    },
    verificationToken: {
      type: DataTypes.STRING(255),
      allowNull: true,
      field: 'verification_token'
    },
    verificationStatus: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      field: 'verification_status'
    },
    adminLevel: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      field: 'admin_level'
    },
    status: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 1
    },
    about: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    facebookUrl: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'facebook_url'
    },
    twitterUrl: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'twitter_url'
    },
    instagramUrl: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'instagram_url'
    },
    refEmail: {
      type: DataTypes.STRING(255),
      allowNull: true,
      field: 'ref_email'
    },
    referralType: {
      type: DataTypes.STRING(225),
      allowNull: true,
      defaultValue: "unlimited",
      field: 'referral_type'
    },
    referralPercent: {
      type: DataTypes.FLOAT,
      allowNull: true,
      field: 'referral_percent'
    },
    referralTimes: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: 'referral_times'
    },
    referralNature: {
      type: DataTypes.STRING(225),
      allowNull: true,
      defaultValue: "flexible",
      field: 'referral_nature'
    },
    notificationSetting: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 1,
      field: 'notification_setting'
    }
  }, {
    sequelize,
    tableName: 'organisers',
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
