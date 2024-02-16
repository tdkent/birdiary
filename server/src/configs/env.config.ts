import dotenv from 'dotenv';
dotenv.config();

const port = process.env.PORT as string;
const dbUsername = process.env.DB_USERNAME as string;
const dbName = process.env.DB_NAME as string;
const dbPassword = process.env.DB_PASSWORD as string;

export { port, dbUsername, dbName, dbPassword };
