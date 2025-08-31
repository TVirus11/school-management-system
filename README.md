# School Management System

A full-stack web application built with Next.js and MySQL for managing school information. This project demonstrates proficiency in modern web development technologies including React, Next.js API routes, database management, and responsive design.

## 🚀 Features

- **Add Schools**: Comprehensive form to add new schools with validation
- **View Schools**: E-commerce style display of all schools in the database
- **Image Upload**: Support for school image uploads with storage management
- **Responsive Design**: Works seamlessly on both desktop and mobile devices
- **Form Validation**: Client and server-side validation for data integrity

## 🛠️ Technology Stack

- **Frontend**: Next.js 13, React 18, React Hook Form
- **Backend**: Next.js API Routes
- **Database**: MySQL
- **File Upload**: Multer for image handling
- **Styling**: CSS-in-JS with responsive design
- **Deployment**: Netlify (Frontend) + MySQL Database

## Prerequisites

Before running this application, ensure you have:

- Node.js (v14 or higher)
- MySQL Server (v8.0 or higher)
- npm or yarn package manager

## Database Setup

1. Create a MySQL Database:

```sql
CREATE DATABASE schools_db;

2. Create the schools table:

```sql
USE schools_db;
CREATE TABLE schools (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name TEXT NOT NULL,
    address TEXT NOT NULL,
    city TEXT NOT NULL,
    state TEXT NOT NULL,
    contact BIGINT NOT NULL,
    image TEXT,
    email_id TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```
