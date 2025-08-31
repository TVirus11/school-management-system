import mysql from 'mysql2/promise';


const dbConfig = {
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || '',
    database: process.env.DB_NAME || 'schools_db',
    port: process.env.DB_PORT || 3306,
};

let connection;

async function connectDB() {
    if (connection) return connection;

    try {
        connection = await mysql.createConnection(dbConfig);
        console.log('Connected to MySQL database');
        return connection;
    } catch (error) {
        console.error('Database connection failed:', error);
        throw error;
    }
}

export default connectDB;