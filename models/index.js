const sequelize = require('../config/connection');

const Post = require('./Post');
const Event = require('./Event');

module.exports = { Post, Event };