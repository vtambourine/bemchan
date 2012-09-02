var db = require('mongojs').connect('bemchan', ['comments, indexes']),
    indxs = db.collection('indexes'),
    cmnts = db.collection('comments');

module.exports = function(serves) {

    serves['i-db'] = {

        /*
        * Создает пост
        * @param comment Текст поста
        * @param parents ID поста(-ов), на которые создаваемый пост является ответом
        */
        postComment : function(comment, parents, callback) {
    
            // Получить ссылки на обЪекты-посты-родители
    
            // Увеличить счетчик постов
    
            // Создать новый пост в коллекции
    
        },
    
        /*
        * Получает пост
        * @param id ID поста
        */
        getComment : function(id, callback) {
    
            cmnts.find( { _id : id  }, function(err, data){
    
                if (err) return;
                callback(null, data[0]);
            });
        },
    
        /*
        * Получает ОП-пост(-ы), в котором(-ых) есть пост с заданным ID
        * @param id ID поста
        */
        getOpComment : function(id) {
    
        },
    
        /*
        * Получает треды
        * @param board Тег(-и)
        * @param startId ID ОП-поста, после которого нужно вернуть ОП-посты
        * @param limit Размер порции выдачи
        */
        getBoard : function(board, startId, limit, callback) {
        
        	console.log('Trying to get board');
        
        	if (typeof startId === 'function') {
        		callback = startId;
        	}
    
            callback(null);
    
        },
    
        /*
        * Получает тред
        * @param id ID ОП-поста
        * @param startId ID поста-ответа, после которого нужно сформировать выдачу
        * @param limit Размер порции выдачи
        */
        getThred : function(){
    
        },
    
        delThred : function(ids){
    
        },
    
        delCommentSoft : function(ids, callback){
    
        },
    
        delCommentHard : function(ids, callback){
    
        },
    
        /*
        * Возвращает массив ссылок или ссылку на объект(-ы) по массиву их идентификаторов или идентификатору
        * @param ids Идентификатор(ы) поста(-ов)
        */
        _getObjectRefById : function(ids, callback){
    
        },
    
        /* Увеличивает счетчик постов на единицу и возвращает полученное значение */
        _incIndex : function(callback){
    
            /* TODO: если коллекция индексов не создана, то создать,
             если объект со счетчиком не создан, то создать */
    
            indxs.update({},{ $inc : { id : 1  } }, function(err){
    
                if (err) return;
                indxs.find({}, function(err, data){
    
                    if (err) return;
                    callback(null, data[0].id);
                });
            });
        },
    
        _dbInit : function(){
            if (!indxs) {
                indxs = db.createColletion('indexes');
                indxs.save( { id : 0 } );
            }
        }
    }
};
