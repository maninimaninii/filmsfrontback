

const pool = require('../pool');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

class User {


    static createUser(userData, callback) {
        const { email, name, password } = userData;
        bcrypt.hash(password, 10, (error, hash) => {
            if (error) {
                throw error;
            } else {
                const watchlist = '[]';
                pool.query(
                    'INSERT INTO users (email, name, password, watchlist) VALUES (?, ?, ?, ?)',
                    [email, name, hash, watchlist],
                    (error, results, fields) => {
                        if (error) throw error;
                        callback(results);
                    }
                );
            }
        });
    }

    static loginUser(email, password, callback) {
        pool.query(
            'SELECT * FROM users WHERE email = ?',
            [email],
            (error, results, fields) => {
                if (error) throw error;
                if (results.length === 0) {
                    callback({ error: 'Utilisateur non trouvé' });
                } else {
                    const user = results[0];
                    bcrypt.compare(password, user.password, (error, isValid) => {
                        if (error) {
                            throw error;
                        } else if (!isValid) {
                            callback({ error: 'Mot de passe incorrect' });
                        } else {
                            const token = jwt.sign(
                                { userId: user.id },
                                'RANDOM_TOKEN_SECRET',
                                { expiresIn: '24h' }
                            );
                            callback({ userId: user.id, token });
                        }
                    });
                }
            }
        );
    }



static getWatchList(userId, callback){
  pool.query('SELECT watchlist FROM users WHERE id = ?', [userId], (error, results, fields) => {
      if (error) throw error;
      callback(results[0]); 
    });
}



static addToWatchList(userId, filmId, callback){
  pool.query(
      'UPDATE users SET watchlist = JSON_ARRAY_APPEND(watchlist, \'$\', ?) WHERE id = ?',
      [filmId, userId],
      (error, results, fields) =>{
          if(error) throw error;
          callback(results);
      }
  )
}

static removeFromWatchList(userId, filmId, callback) {
    pool.query(
        'UPDATE users SET watchlist = IF(JSON_LENGTH(watchlist) > 1, JSON_REMOVE(watchlist, JSON_UNQUOTE(JSON_SEARCH(watchlist, \'one\', ?))), \'[]\') WHERE id = ?',
        [filmId, userId],
        (error, results, fields) => {
            if (error) throw error;
            callback(results);
        }
    );
}


}

module.exports = User;