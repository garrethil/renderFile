const sequelize = require('../config/connection');

const Post = require('./Post');
const Event = require('./Event');
const User = require('./User');

module.exports = { Post, Event, User };