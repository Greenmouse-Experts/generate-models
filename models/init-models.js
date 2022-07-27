var DataTypes = require("sequelize").DataTypes;
var _Access = require("./access");
var _AdminConfirmations = require("./admin_confirmations");
var _Aimtogetwebhooklog = require("./aimtogetwebhooklog");
var _Airtimebatch = require("./airtimebatch");
var _Airtimelog = require("./airtimelog");
var _Backgrounds = require("./backgrounds");
var _CareerRequests = require("./career_requests");
var _Categories = require("./categories");
var _Cities = require("./cities");
var _Contactus = require("./contactus");
var _Contestants = require("./contestants");
var _Countries = require("./countries");
var _EbulksmsInboxLog = require("./ebulksms_inbox_log");
var _EbulksmsLog = require("./ebulksms_log");
var _EmailList = require("./email_list");
var _EventCategory = require("./event_category");
var _EventDetails = require("./event_details");
var _EventReferral = require("./event_referral");
var _EventTicket = require("./event_ticket");
var _EventTicketInfo = require("./event_ticket_info");
var _EventTicketPayout = require("./event_ticket_payout");
var _EventTicketPayoutPreset = require("./event_ticket_payout_preset");
var _EventType = require("./event_type");
var _Faq = require("./faq");
var _Flutterwavewebhooklog = require("./flutterwavewebhooklog");
var _FormDetails = require("./form_details");
var _FormPayout = require("./form_payout");
var _FormPayoutPreset = require("./form_payout_preset");
var _FormResponse = require("./form_response");
var _Info = require("./info");
var _Keys = require("./keys");
var _Limits = require("./limits");
var _Logs = require("./logs");
var _Migrations = require("./migrations");
var _Notifications = require("./notifications");
var _Organisers = require("./organisers");
var _Payouts = require("./payouts");
var _Paystackwebhooklog = require("./paystackwebhooklog");
var _Payuwebhooklog = require("./payuwebhooklog");
var _ReferralEarning = require("./referral_earning");
var _Roqquwebhooklog = require("./roqquwebhooklog");
var _SentSmsLog = require("./sent_sms_log");
var _Settings = require("./settings");
var _SmsLog = require("./sms_log");
var _SmsNotificationList = require("./sms_notification_list");
var _SmsNotificationLog = require("./sms_notification_log");
var _Sponsors = require("./sponsors");
var _States = require("./states");
var _TriviaDetails = require("./trivia_details");
var _TriviaOptions = require("./trivia_options");
var _TriviaPaymentRecord = require("./trivia_payment_record");
var _TriviaQuestions = require("./trivia_questions");
var _TriviaResults = require("./trivia_results");
var _TriviaUsers = require("./trivia_users");
var _TriviaUsersThatAnswered = require("./trivia_users_that_answered");
var _Urls = require("./urls");
var _Urlstatistics = require("./urlstatistics");
var _UssdNotificationLog = require("./ussd_notification_log");
var _VoteInfobipLog = require("./vote_infobip_log");
var _VotePayout = require("./vote_payout");
var _VotePayoutPreset = require("./vote_payout_preset");
var _Votes = require("./votes");
var _VotesFix = require("./votes_fix");
var _VotingDetails = require("./voting_details");

function initModels(sequelize) {
  var Access = _Access(sequelize, DataTypes);
  var AdminConfirmations = _AdminConfirmations(sequelize, DataTypes);
  var Aimtogetwebhooklog = _Aimtogetwebhooklog(sequelize, DataTypes);
  var Airtimebatch = _Airtimebatch(sequelize, DataTypes);
  var Airtimelog = _Airtimelog(sequelize, DataTypes);
  var Backgrounds = _Backgrounds(sequelize, DataTypes);
  var CareerRequests = _CareerRequests(sequelize, DataTypes);
  var Categories = _Categories(sequelize, DataTypes);
  var Cities = _Cities(sequelize, DataTypes);
  var Contactus = _Contactus(sequelize, DataTypes);
  var Contestants = _Contestants(sequelize, DataTypes);
  var Countries = _Countries(sequelize, DataTypes);
  var EbulksmsInboxLog = _EbulksmsInboxLog(sequelize, DataTypes);
  var EbulksmsLog = _EbulksmsLog(sequelize, DataTypes);
  var EmailList = _EmailList(sequelize, DataTypes);
  var EventCategory = _EventCategory(sequelize, DataTypes);
  var EventDetails = _EventDetails(sequelize, DataTypes);
  var EventReferral = _EventReferral(sequelize, DataTypes);
  var EventTicket = _EventTicket(sequelize, DataTypes);
  var EventTicketInfo = _EventTicketInfo(sequelize, DataTypes);
  var EventTicketPayout = _EventTicketPayout(sequelize, DataTypes);
  var EventTicketPayoutPreset = _EventTicketPayoutPreset(sequelize, DataTypes);
  var EventType = _EventType(sequelize, DataTypes);
  var Faq = _Faq(sequelize, DataTypes);
  var Flutterwavewebhooklog = _Flutterwavewebhooklog(sequelize, DataTypes);
  var FormDetails = _FormDetails(sequelize, DataTypes);
  var FormPayout = _FormPayout(sequelize, DataTypes);
  var FormPayoutPreset = _FormPayoutPreset(sequelize, DataTypes);
  var FormResponse = _FormResponse(sequelize, DataTypes);
  var Info = _Info(sequelize, DataTypes);
  var Keys = _Keys(sequelize, DataTypes);
  var Limits = _Limits(sequelize, DataTypes);
  var Logs = _Logs(sequelize, DataTypes);
  var Migrations = _Migrations(sequelize, DataTypes);
  var Notifications = _Notifications(sequelize, DataTypes);
  var Organisers = _Organisers(sequelize, DataTypes);
  var Payouts = _Payouts(sequelize, DataTypes);
  var Paystackwebhooklog = _Paystackwebhooklog(sequelize, DataTypes);
  var Payuwebhooklog = _Payuwebhooklog(sequelize, DataTypes);
  var ReferralEarning = _ReferralEarning(sequelize, DataTypes);
  var Roqquwebhooklog = _Roqquwebhooklog(sequelize, DataTypes);
  var SentSmsLog = _SentSmsLog(sequelize, DataTypes);
  var Settings = _Settings(sequelize, DataTypes);
  var SmsLog = _SmsLog(sequelize, DataTypes);
  var SmsNotificationList = _SmsNotificationList(sequelize, DataTypes);
  var SmsNotificationLog = _SmsNotificationLog(sequelize, DataTypes);
  var Sponsors = _Sponsors(sequelize, DataTypes);
  var States = _States(sequelize, DataTypes);
  var TriviaDetails = _TriviaDetails(sequelize, DataTypes);
  var TriviaOptions = _TriviaOptions(sequelize, DataTypes);
  var TriviaPaymentRecord = _TriviaPaymentRecord(sequelize, DataTypes);
  var TriviaQuestions = _TriviaQuestions(sequelize, DataTypes);
  var TriviaResults = _TriviaResults(sequelize, DataTypes);
  var TriviaUsers = _TriviaUsers(sequelize, DataTypes);
  var TriviaUsersThatAnswered = _TriviaUsersThatAnswered(sequelize, DataTypes);
  var Urls = _Urls(sequelize, DataTypes);
  var Urlstatistics = _Urlstatistics(sequelize, DataTypes);
  var UssdNotificationLog = _UssdNotificationLog(sequelize, DataTypes);
  var VoteInfobipLog = _VoteInfobipLog(sequelize, DataTypes);
  var VotePayout = _VotePayout(sequelize, DataTypes);
  var VotePayoutPreset = _VotePayoutPreset(sequelize, DataTypes);
  var Votes = _Votes(sequelize, DataTypes);
  var VotesFix = _VotesFix(sequelize, DataTypes);
  var VotingDetails = _VotingDetails(sequelize, DataTypes);


  return {
    Access,
    AdminConfirmations,
    Aimtogetwebhooklog,
    Airtimebatch,
    Airtimelog,
    Backgrounds,
    CareerRequests,
    Categories,
    Cities,
    Contactus,
    Contestants,
    Countries,
    EbulksmsInboxLog,
    EbulksmsLog,
    EmailList,
    EventCategory,
    EventDetails,
    EventReferral,
    EventTicket,
    EventTicketInfo,
    EventTicketPayout,
    EventTicketPayoutPreset,
    EventType,
    Faq,
    Flutterwavewebhooklog,
    FormDetails,
    FormPayout,
    FormPayoutPreset,
    FormResponse,
    Info,
    Keys,
    Limits,
    Logs,
    Migrations,
    Notifications,
    Organisers,
    Payouts,
    Paystackwebhooklog,
    Payuwebhooklog,
    ReferralEarning,
    Roqquwebhooklog,
    SentSmsLog,
    Settings,
    SmsLog,
    SmsNotificationList,
    SmsNotificationLog,
    Sponsors,
    States,
    TriviaDetails,
    TriviaOptions,
    TriviaPaymentRecord,
    TriviaQuestions,
    TriviaResults,
    TriviaUsers,
    TriviaUsersThatAnswered,
    Urls,
    Urlstatistics,
    UssdNotificationLog,
    VoteInfobipLog,
    VotePayout,
    VotePayoutPreset,
    Votes,
    VotesFix,
    VotingDetails,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
