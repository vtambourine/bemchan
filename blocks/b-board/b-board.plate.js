module.exports = function(plates) {

    plates['b-board'] = function(ctx, boards) {
    
    	console.log('b-board.plate', 'Recieved data:', boards);
    
    	var content = [];
    	    	
    	(boards instanceof Array) && boards.forEach(function(board) {
    		
    		content.push({
    			block: 'b-board',
    			content: (board.children instanceof Array) && board.children.map(function(comment) {
    				return plates['b-comment'](ctx, comment);
    			})
    		});
    			
    	});

        content.push({
            block: 'b-cancer',
            tag: 'form',
            attrs: {
                method: 'post'
            },
            content: [
                { tag: 'textarea', attrs: { name: 'text' }, content: 'Show Must Go On' },
                { tag: 'input', attrs: { type: 'submit' } }
            ]
        });

        console.log('b-board.plate', 'Content:', content)
        
        return content;

    }

}