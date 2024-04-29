const pool = require('../pool');

class Film{
    static getAll(callback){
        pool.query("SELECT * FROM films WHERE category = 'film'", (error, results, fields) => {
            if(error) throw error; 
            callback(results);
        });
    
    }
}

module.exports = Film;