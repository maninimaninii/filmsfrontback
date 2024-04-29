const pool = require('../pool');

class Film{
    static getAllF(callback){
        pool.query("SELECT * FROM films WHERE category = 'film'", (error, results, fields) => {
            if(error) throw error; 
            callback(results);
        }); 
    }

    static getAllS(callback){
        pool.query("SELECT * FROM films WHERE category = 'serie'", (error, results, fields) => {
            if(error) throw error;
            callback(results);
        });
    }

    static getFilmById(id, callback){
        pool.query('SELECT * FROM films WHERE id = ?', [id], (error, results, fields) => {
            if (error) throw error;
            callback(results[0]); 
          });
    }

    
    
}

module.exports = Film;