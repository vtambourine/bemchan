var db = require('mongojs').connect('bemchan', ['comments, indexes']),
    indxs = db.collection('indexes'),
    cmnts = db.collection('comments');

module.exports = function(serves) {

    serves['i-db'] = {

        /*
         * Создает пост
         * @param data.text Текст поста
         * @param data.tags Теги
         * @param data.threadId ID треда (ОП-поста)
         * @param data.parents ID поста(-ов), на которые создаваемый пост является ответом
         */
        postComment : function(data, callback) {

            this._incIndex(function(err, id) {

                var query = {};

                if (err) {
                    callback(err, null);
                } else {
                    query = {
                        _id     : id,
                        text    : data.text,
                        tags    : data.tags,
                        date    : new Date(),
                        parents : data.parents
                    };

                    data.threadId && (query.threadId = data.threadId);

                    cmnts.insert(query, callback);
                }
            });
        },

        /*
         * Получает тред
         * @param id ID ОП-поста
         */
        getThread : function(id, callback) {

            cmnts.find( { $or: [{ threadId: id }, { _id: id }] } , function(err, data) {

                if (err) {
                    callback(err, null);
                } else {
                    callback(null, data);
                }
            });
        },

        /*
         * Получает пост(-ы)
         * @param id ID поста(-ов)
         */
        getComment : function(id, callback) {

            var query  = {};

            ( id instanceof Array ) ? query = { _id : { $in : id } } : query._id = id;

            cmnts.find(query, function(err, data) {

                if (err) {
                    callback(err, null);
                } else {
                    callback(null, data[0]);
                }
            });
        },

        /* Увеличивает счетчик постов на единицу и возвращает полученное значение */
        _incIndex : function(callback) {

            indxs.update({}, { $inc : { id : 1  } }, function(err) {

                if (err) {
                    callback(err, null);
                } else {
                    indxs.find({}, function(err, data) {

                        if (err) {
                            callback(err, null);
                        } else {
                            callback(null, data[0].id);
                        }
                    });
                }
            });
        }
    }
};
