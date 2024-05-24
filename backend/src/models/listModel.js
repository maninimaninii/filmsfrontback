const pool = require('../pool');

class List{



    static getAllL(callback){
        pool.query("SELECT * FROM lists", (error, results, fields)=>{
            if(error) throw error;
            callback(results);
        });
    }


    static getListById(id, callback){
        pool.query('SELECT LISTE FROM lists WHERE id = ?', [id], (error, results, fields) =>{
            if(error) throw error;
            callback(results);
        });
    }
}