import mysql from 'mysql2/promise';


const dbConfig = {
  host: process.env.DB_HOST || "sql12.freesqldatabase.com",
  user: process.env.DB_USER || "sql12796884",
  password: process.env.DB_PASSWORD || "",
  database: process.env.DB_NAME || "sql12796884",
  port: process.env.DB_PORT || 3306,
  ssl: {
    rejectUnauthorized: false,
  }
};

let connection;

async function connectDB() {
    if (connection) return connection;

    try {
        connection = await mysql.createConnection(dbConfig);
        console.log('Connected to MySQL database');
        return connection;
    } catch (error) {
      console.error("Database connection failed:", error.message);

      // Provide helpful error messages
      if (error.code === "ER_ACCESS_DENIED_ERROR") {
        console.log("Please check your database credentials");
      } else if (error.code === "ECONNREFUSED") {
        console.log("Cannot connect to database host");
      }

      throw error;
    }
}

export default connectDB;