module.exports = function(serves) {

    serves['b-board'] = function(ctx, callback) {

		var db = ctx.db,
			tags = ctx.route.boards,
            boardsLeft, threadsLeft;
		
		db.getBoard(tags, function(err, boards) {

			console.log('Boards got:', boards);
            boardsLeft = boards.length;
			boards.forEach(function(board) {

                boardsLeft--;
                threadsLeft = board.children.length;

                board.children.forEach(function(id, index, array) {

                    threadsLeft--;

                    db.getThread(id, function(err, thread) {
                        array[index] = thread;
                        if (!(boardsLeft || threadsLeft)) {
                            ctx.data.boards = boards;
                            console.log('boards', boards)
                            callback(null);
                        }
                    })

                });

            });

		});

    }

}