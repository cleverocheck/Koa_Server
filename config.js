 const { Sequelize } = require('sequelize');
 const sequelize = new Sequelize('React_Chat', 'root', '1853', {
   host: 'localhost',
   dialect: 'mysql'
 }); 

var Articles = sequelize.import('./tables/articles.js')
var Message = sequelize.import('./tables/message.js')
var Topic = sequelize.import('./tables/topic.js')
var User = sequelize.import('./tables/user.js')

module.exports = {
	Articles:Articles,
	Message:Message,
	Topic:Topic,
	User:User

}