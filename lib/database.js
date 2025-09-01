import mysql from 'mysql2/promise';


const dbConfig = {
  host: process.env.DB_HOST || "sql12.freesqldatabase.com",
  user: process.env.DB_USER || "sql12796884",
  password: process.env.DB_PASSWORD || "",
  database: process.env.DB_NAME || "sql12796884",
  port: process.env.DB_PORT || 3306,
};

let connection;

async function connectDB() {
  if (connection) return connection;

  try {
    connection = await mysql.createConnection(dbConfig);
    console.log("✅ Connected to MySQL database");

    // Automatically create table if it doesn't exist
    try {
      await connection.execute(`
        CREATE TABLE IF NOT EXISTS schools (
          id INT AUTO_INCREMENT PRIMARY KEY,
          name TEXT NOT NULL,
          address TEXT NOT NULL,
          city TEXT NOT NULL,
          state TEXT NOT NULL,
          contact BIGINT NOT NULL,
          image TEXT,
          email_id TEXT NOT NULL,
          created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        )
      `);
      console.log("✅ Schools table ready");
    } catch (tableError) {
      console.log("ℹ️ Table already exists or cannot be created");
    }

    return connection;
  } catch (error) {
    console.error("❌ Database connection failed:", error.message);
    throw error;
  }
}

export default connectDB;