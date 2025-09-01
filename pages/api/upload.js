// pages/api/upload.js
import { v2 as cloudinary } from "cloudinary";

// Configure Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export const config = {
  api: {
    bodyParser: {
      sizeLimit: "5mb", // Set higher limit for images
    },
  },
};

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { image } = req.body;

    if (!image) {
      return res.status(400).json({ error: "No image data provided" });
    }

    // Upload image to Cloudinary
    const uploadResult = await cloudinary.uploader.upload(image, {
      folder: "school-images", // Optional folder organization
    });

    // Return the secure URL of the uploaded image
    res.status(200).json({
      imagePath: uploadResult.secure_url,
      message: "Image uploaded successfully to Cloudinary",
    });
  } catch (error) {
    console.error("Upload error:", error);
    res.status(500).json({ error: "Failed to upload image: " + error.message });
  }
}
