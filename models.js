/**
 * Load dependencies
 */
var mongoose = require('mongoose')
  , Schema   = mongoose.Schema;


/**
 * Schema
 */
var UserSchema = new Schema({
  'twitterID': String,
  'token': String,
  'username': String,
  'displayName': String,
  'photo': String
});

var NewsFeedSchema = new Schema({
  'user': {
    'username': String,
    'photo': String
  },
  'message': String,
  'posted': { type: Date, default: Date.now() }
});


/**
 * Models
 */
exports.User = mongoose.model('User', UserSchema);
exports.NewsFeed = mongoose.model('NewsFeed', NewsFeedSchema);
