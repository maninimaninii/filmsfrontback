const pool = require('../pool');

class User{
    

    static createUser(userData, callback){
        const{email, name, password} = userData;
        pool.query(
            'INSERT INTO users (email, name, password) VALUES (?, ?, ?)',
            [email, name, password],
            (error, results, fields) => {
              if (error) throw error;
              callback(results);
            }
          );
    }


    static getUserByEmail(email, callback) {
        pool.query(
          'SELECT * FROM users WHERE email = ?',
          [email],
          (error, results, fields) => {
            if (error) throw error;
            callback(results[0]);
          }
        );
      }


    static addtToWatchList(userId, filmId, callback){
        pool.query(
            'UPDATE users SET watchlist = JSON_ARRAY_APPEND(watchlist, \'$\', ?) WHERE id = ?',
            [filmId, userId],
            (error, results, fields) =>{
                if(error) throw error;
                callback(results);
            }
        )
    }


    static getWatchList(userId, callback){
        pool.query(
            'SELECT watchlist from users WHERE id = ?',
            [userId],
            (error, results, fields)=>{
                if (error) throw error;
                callback(results[0].watchlist);
            }
        )
    }
}

module.exports = User;