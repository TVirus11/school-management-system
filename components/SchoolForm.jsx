import { useForm } from "react-hook-form";
import { useState } from "react";

const SchoolForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState("");

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    setMessage("");

    try {
      let imagePath = "";

      // Upload image to Cloudinary if provided
      if (data.image && data.image.length > 0) {
        const file = data.image[0];

        // Convert image to base64 for Cloudinary
        const imageData = await new Promise((resolve, reject) => {
          const reader = new FileReader();
          reader.onload = (e) => resolve(e.target.result);
          reader.onerror = (error) => reject(error);
          reader.readAsDataURL(file);
        });

        const uploadResponse = await fetch("/api/upload", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ image: imageData }),
        });

        if (!uploadResponse.ok) {
          const errorData = await uploadResponse.json();
          throw new Error(errorData.error || "Image upload failed");
        }

        const uploadResult = await uploadResponse.json();
        imagePath = uploadResult.imagePath;
      }

      // Submit school data
      const schoolData = {
        name: data.name,
        address: data.address,
        city: data.city,
        state: data.state,
        contact: data.contact,
        email_id: data.email_id,
        image: imagePath,
      };

      const response = await fetch("/api/schools", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(schoolData),
      });

      const result = await response.json();

      if (response.ok) {
        setMessage("School added successfully!");
        reset();
      } else {
        throw new Error(result.error || "Failed to add school");
      }
    } catch (error) {
      setMessage("Error: " + error.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="form-container">
      <h2>Add New School</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="school-form">
        <div className="form-group">
          <label htmlFor="name">School Name *</label>
          <input
            id="name"
            {...register("name", { required: "School name is required" })}
          />
          {errors.name && <span className="error">{errors.name.message}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="address">Address *</label>
          <textarea
            id="address"
            {...register("address", { required: "Address is required" })}
            rows={3}
          />
          {errors.address && (
            <span className="error">{errors.address.message}</span>
          )}
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="city">City *</label>
            <input
              id="city"
              {...register("city", { required: "City is required" })}
            />
            {errors.city && (
              <span className="error">{errors.city.message}</span>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="state">State *</label>
            <input
              id="state"
              {...register("state", { required: "State is required" })}
            />
            {errors.state && (
              <span className="error">{errors.state.message}</span>
            )}
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="contact">Contact Number *</label>
          <input
            id="contact"
            type="number"
            {...register("contact", {
              required: "Contact number is required",
              min: {
                value: 1000000000,
                message: "Contact number must be 10 digits",
              },
              max: {
                value: 9999999999,
                message: "Contact number must be 10 digits",
              },
            })}
          />
          {errors.contact && (
            <span className="error">{errors.contact.message}</span>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="email_id">Email Address *</label>
          <input
            id="email_id"
            type="email"
            {...register("email_id", {
              required: "Email is required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Invalid email address",
              },
            })}
          />
          {errors.email_id && (
            <span className="error">{errors.email_id.message}</span>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="image">School Image</label>
          <input
            id="image"
            type="file"
            accept="image/*"
            {...register("image")}
          />
          <p className="file-hint">Supports JPG, PNG, GIF up to 5MB</p>
        </div>

        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Adding School..." : "Add School"}
        </button>

        {message && (
          <div
            className={`message ${
              message.includes("Error") ? "error" : "success"
            }`}
          >
            {message}
          </div>
        )}
      </form>

      <style jsx>{`
        .form-container {
          max-width: 600px;
          margin: 0 auto;
          padding: 20px;
        }

        h2 {
          text-align: center;
          margin-bottom: 30px;
          color: #333;
        }

        .school-form {
          background: #f9f9f9;
          padding: 25px;
          border-radius: 8px;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
        }

        .form-group {
          margin-bottom: 20px;
        }

        .form-row {
          display: flex;
          gap: 15px;
        }

        .form-row .form-group {
          flex: 1;
        }

        label {
          display: block;
          margin-bottom: 8px;
          font-weight: 600;
          color: #444;
        }

        input,
        textarea {
          width: 100%;
          padding: 12px;
          border: 1px solid #ddd;
          border-radius: 4px;
          font-size: 16px;
          box-sizing: border-box;
        }

        textarea {
          resize: vertical;
          min-height: 80px;
        }

        input:focus,
        textarea:focus {
          outline: none;
          border-color: #4a90e2;
          box-shadow: 0 0 0 2px rgba(74, 144, 226, 0.2);
        }

        .error {
          color: #e74c3c;
          font-size: 14px;
          margin-top: 5px;
          display: block;
        }

        .file-hint {
          font-size: 12px;
          color: #666;
          margin-top: 5px;
          font-style: italic;
        }

        button {
          width: 100%;
          padding: 12px;
          background-color: #4a90e2;
          color: white;
          border: none;
          border-radius: 4px;
          font-size: 16px;
          cursor: pointer;
          transition: background-color 0.2s;
        }

        button:hover:not(:disabled) {
          background-color: #357abd;
        }

        button:disabled {
          background-color: #ccc;
          cursor: not-allowed;
        }

        .message {
          margin-top: 15px;
          padding: 10px;
          border-radius: 4px;
          text-align: center;
        }

        .message.success {
          background-color: #d4edda;
          color: #155724;
          border: 1px solid #c3e6cb;
        }

        .message.error {
          background-color: #f8d7da;
          color: #721c24;
          border: 1px solid #f5c6cb;
        }

        @media (max-width: 768px) {
          .form-row {
            flex-direction: column;
            gap: 0;
          }

          .school-form {
            padding: 15px;
          }
        }
      `}</style>
    </div>
  );
};

export default SchoolForm;
