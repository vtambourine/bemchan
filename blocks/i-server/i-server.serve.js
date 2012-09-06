module.exports = function(serves) {

    var express = require('express'),
        server = express();

    server.use(express.bodyParser());
    server.listen(3001);

    server.all('*', function(req, res) {

        var ctx = {
                originalReq: req,
                req: {
                    type: 'render',
                    page: 'home',
                    commentId: 0
                },
                route: {},
                data: {},
                cgi: function() {},
                db: serves['i-db']
            };

        serves['b-chan'](ctx, function(err) {
        	console.log('Attempt to render templates');
            var html = serves.bemhtml.apply(serves.plates['b-chan'](ctx));
            res.writeHeader(200, { 'Content-Type': 'text/html;charset=utf-8' });
            res.end(html);
        });

    });

};