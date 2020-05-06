const Router = require('koa-router'); 
const router = new Router();
const User = require('../requests/getUser/index.js');
const tables = require('../config.js')
var parse = require('co-body')

router.post('/getUser', async (ctx) =>{
	try{

var body = await parse.json(ctx.req)
//ctx.req._parsedUrl.query
const rusult =await User.getUser(ctx.req._parsedUrl.query,tables);
ctx.body = rusult
	}
	catch(err){
		console.log('err',err)
		ctx.status = 500
		ctx.body = 'Internal error'
	}
})
router.get ('/',async(ctx) =>{
	ctx.body = 'Router Ok'
})
module.exports = router;

