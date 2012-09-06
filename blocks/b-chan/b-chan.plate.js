module.exports = function(plates) {

    plates['b-chan'] = function(ctx) {
    
    	var route = ctx.route,
    		content = [];
    	
    	if (route.boards) {
    		console.log('Render boards');
    		route.boards && content.push(plates['b-board'](ctx, ctx.data.boards));
    	} else if (route.thread) {
    		console.log('Render thread');
	    	route.thread && content.push(plates['b-thread'](ctx, ctx.data.thread));
    	} else {
    		content.push('Hello, Chan!');
    	}
    
		return {
			block: 'b-page',
			head: [
			   { elem: 'css', url: 'board.css' }
			],
			content: [
			    {
			        block: 'b-chan',
			        content: [
			        	{
			        		elem: 'content',
			        		content: content
			        	}
			        ]
			    }
			]
		} 

    }

}