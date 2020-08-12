//collecting from the user model and exporting user data
const User = require('./User');
const Post = require("./Post");

// create associations
User.hasMany(Post, {
  foreignKey: 'user_id'
});

Post.belongsTo(User, {
  foreignKey: 'user_id',
});

//exporting object with user model as a property
module.exports = { User, Post };