module.exports = function(serves) {

    serves['b-chan'] = function(ctx, callback) {
    
    	var url = ctx.originalReq.url,
    		rule;
    	
    	if (rule = url.match(/^\/(\d+)\/?/)) {
    		console.log('Routing to thread number', rule[1]);
    		ctx.route.thread = rule[1];
    		serves['b-thread'](ctx, callback);
    	} else if (rule = url.match(/[a-z0-9]+/g)) {
    		console.log('Routing to boards named', rule);
    		ctx.route.boards = rule;
    		serves['b-board'](ctx, callback);
    	} else {
    		console.log('No route.');
    		callback(null);
    	}

    }

}