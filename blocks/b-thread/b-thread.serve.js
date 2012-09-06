module.exports = function(serves) {

    serves['b-thread'] = function(ctx, callback) {

        var db = ctx.db,
            threadId = +ctx.route.thread;

        db.getThread(threadId, function(err, thread) {
            console.log('Thread got:', thread);
            ctx.data.thread = thread;

            callback(null);
        });

    }

}