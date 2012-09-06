module.exports = function(plates) {

	plates['b-comment'] = function(ctx, comment) {

        console.log('b-comment: Recieved data:', comment);
		
		return {
			block: 'b-comment',
			content: comment.message || 'Nope'
		}
		
	}

}