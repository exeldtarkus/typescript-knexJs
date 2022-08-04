import {knex} from 'knex'
import {paymentDB} from '../database_config'

const paymentDBConnection = knex({
    client: 'mysql2',
    connection: {
        user: paymentDB.username,
        host: paymentDB.host,
        port: 3309,
        database: paymentDB.db,
        password: paymentDB.password,
    }
});

export {
    paymentDBConnection
}