module.exports = function(plates) {

    plates['b-thread'] = function(ctx, threads) {

        console.log('b-thread.plate', 'Recieved data:', threads);

        var content = threads.map(function(thread) {
            return {
                block: 'b-comment',
                content: [
                    { elem: 'id', tag: 'h1', content: thread._id },
                    { elem: 'content', tag: 'code', content: thread.text }
                ]
            }
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

        return content;

    }

}