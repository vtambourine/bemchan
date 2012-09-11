module.exports = function(serves) {

    serves['b-thread'] = function(ctx, callback) {

        console.log('Getting thread', ctx.originalReq);

        var db = ctx.db,
            threadId = +ctx.route.thread,
            renderThread = function() {
                db.getThread(threadId, function(err, thread) {
                    console.log('Thread got:', thread);
                    ctx.data.thread = thread;

                    callback(null);
                });
            };

         if (ctx.originalReq.method.toLocaleLowerCase() == 'post') {

            console.log('postong thread')

            db.postComment({
                threadId: +ctx.route.thread,
                text: 'No o no',
                tags: 'b'
            }, function(err) {
                renderThread();
            })

        } else {

            renderThread();

        }


    }

}