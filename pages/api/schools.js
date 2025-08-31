import connectDB from "../../lib/database";

export default async function handler(req, res) {
  if (req.method === "GET") {
    try {
      const db = await connectDB();
      const [rows] = await db.execute(
        "SELECT id, name, address, city, state, contact, image, email_id FROM schools ORDER BY created_at DESC"
      );
      res.status(200).json(rows);
    } catch (error) {
      console.error("Database error:", error);
      res.status(500).json({ error: "Failed to fetch schools" });
    }
  } else if (req.method === "POST") {
    try {
      const { name, address, city, state, contact, image, email_id } = req.body;

      // Validation
      if (!name || !address || !city || !state || !contact || !email_id) {
        return res.status(400).json({ error: "All fields are required" });
      }

      const db = await connectDB();

      const [result] = await db.execute(
        "INSERT INTO schools (name, address, city, state, contact, image, email_id) VALUES (?, ?, ?, ?, ?, ?, ?)",
        [name, address, city, state, contact, image, email_id]
      );

      res
        .status(201)
        .json({ id: result.insertId, message: "School added successfully" });
    } catch (error) {
      console.error("Database error:", error);
      res.status(500).json({ error: "Failed to add school" });
    }
  } else {
    res.setHeader("Allow", ["GET", "POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
