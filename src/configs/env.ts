import dotenv from 'dotenv';
dotenv.config();

const {
    PORT,
    DB_HOST,
    DB_NAME,
    POSTGRES_HOST,
    POSTGRES_DB,
    POSTGRES_USER,
    POSTGRES_PASSWORD,
    BCRYPT,
    JWT
} = process.env


export default {
    port: PORT,
    mongodbhost: DB_HOST,
    mongodbname: DB_NAME,
    postgreshost: POSTGRES_HOST,
    postgresdbname: POSTGRES_DB,
    dbuser: POSTGRES_USER,
    dbpass: POSTGRES_PASSWORD,
    bcrypt: BCRYPT,
    jwt: JWT

}