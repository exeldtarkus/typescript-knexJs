import dotenv from 'dotenv';

dotenv.config();

const paymentDB = {
    host: process.env.DB_HOST,
    host_read: process.env.DB_HOST_READ,
    port: process.env.DB_HOST_PORT,
    db: process.env.DB_DATABASE,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD
}

export {
    paymentDB
}