const sequelize = require('../config/connection');

const User = require('./User');
const Post = require('./Post');

module.exports = { User, Post };