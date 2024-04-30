const pool = require('../pool');

class User{
    

  static createUser(userData, callback){
    const { email, name, password } = userData;
    const watchlist = '[]'; 
    console.log(userData)
    pool.query(
        'INSERT INTO users (email, name, password, watchlist) VALUES (?, ?, ?, ?)',
        [email, name, password, watchlist],
        (error, results, fields) => {
            if (error) throw error;
            callback(results);
        }
    );
}



static getWatchList(id, callback){
  pool.query('SELECT watchlist FROM users WHERE id = ?', [id], (error, results, fields) => {
      if (error) throw error;
      callback(results[0]); 
    });
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

}

module.exports = User;