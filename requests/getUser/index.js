 const {Op}  = require("sequelize");
exports.getUser = (body,tables) => new Promise(async (resolve,reject) =>{

try{

	resolve(await tables.User.findAll({
  where: {
  	id: 1
  }
}));
}
catch(err){
	reject(err);
}
}) ;
 
