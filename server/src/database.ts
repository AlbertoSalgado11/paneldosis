import mysql from 'promise-mysql';

import keys from './keys';

const pool = mysql.createPool(keys.database);

//instalar npm i promise-mysql@3.3.1 si da error
pool.getConnection().then( connection => {
    pool.releaseConnection(connection);
    console.log('DB is connected');
});

export default pool;