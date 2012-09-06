module.exports = function(plates) {

    plates['b-thread'] = function(ctx, thread) {

        console.log('b-thread.plate', 'Recieved data:', thread);

        var content = [{
            block: 'b-comment',
            content: [
                { elem: 'id', tag: 'h1', content: thread.id },
                { elem: 'content', tag: 'code', content: thread.message }
            ]
        }];

        return content;

    }

}