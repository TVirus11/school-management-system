import { useState, useEffect } from "react";
import Head from "next/head";
import Link from "next/link";
import SchoolCard from "../components/SchoolCard";

const ShowSchools = () => {
  const [schools, setSchools] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchSchools = async () => {
      try {
        const response = await fetch("/api/schools");
        if (!response.ok) {
          throw new Error("Failed to fetch schools");
        }
        const data = await response.json();
        setSchools(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchSchools();
  }, []);

  return (
    <div className="page-container">
      <Head>
        <title>View Schools - School Directory</title>
        <meta name="description" content="Browse schools in our directory" />
      </Head>

      <header className="header">
        <div className="header-content">
          <div className="logo-section">
            <div className="logo">
              <span className="logo-icon">🏫</span>
              <h1>School Directory</h1>
            </div>
          </div>

          <nav className="navigation">
            <div className="nav-tabs">
              <Link href="/addSchool" className="nav-tab">
                <span className="tab-icon">➕</span>
                Add School
              </Link>
              <Link href="/showSchools" className="nav-tab active">
                <span className="tab-icon">👁️</span>
                View Schools
              </Link>
            </div>
          </nav>
        </div>
      </header>

      <main>
        <div className="schools-container">
          <h2>Our Schools</h2>

          {loading && <div className="loading">Loading schools...</div>}

          {error && <div className="error">Error: {error}</div>}

          {!loading && !error && schools.length === 0 && (
            <div className="empty-state">
              <p>No schools found. Add the first school!</p>
              <Link href="/addSchool" className="cta-button">
                Add School
              </Link>
            </div>
          )}

          {!loading && !error && schools.length > 0 && (
            <div className="schools-grid">
              {schools.map((school) => (
                <SchoolCard key={school.id} school={school} />
              ))}
            </div>
          )}
        </div>
      </main>

      <style jsx>{`
        .page-container {
          min-height: 100vh;
          background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
        }

        .header {
          background: white;
          border-bottom: 1px solid #e2e8f0;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
        }

        .header-content {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 2rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          height: 80px;
        }

        .logo-section {
          display: flex;
          align-items: center;
        }

        .logo {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .logo-icon {
          font-size: 2.2rem;
        }

        .logo h1 {
          margin: 0;
          color: #2d3748;
          font-size: 1.8rem;
          font-weight: 700;
          background: linear-gradient(135deg, #4299e1, #667eea);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .navigation {
          display: flex;
        }

        .nav-tabs {
          display: flex;
          background: #f7fafc;
          padding: 6px;
          border-radius: 12px;
          border: 1px solid #e2e8f0;
          gap: 8px;
        }

        .nav-tab {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 10px 20px;
          text-decoration: none;
          color: #718096;
          font-weight: 500;
          border-radius: 8px;
          transition: all 0.2s ease;
          border: 2px solid transparent;
        }

        .nav-tab:hover {
          color: #4299e1;
          background: rgba(66, 153, 225, 0.1);
        }

        .nav-tab.active {
          color: white;
          background: linear-gradient(135deg, #4299e1, #667eea);
          box-shadow: 0 2px 4px rgba(66, 153, 225, 0.3);
        }

        .nav-tab.active:hover {
          background: linear-gradient(135deg, #3182ce, #5a67d8);
        }

        .tab-icon {
          font-size: 1.1rem;
        }

        main {
          padding: 40px 20px;
        }

        .schools-container {
          max-width: 1200px;
          margin: 0 auto;
        }

        h2 {
          text-align: center;
          margin-bottom: 40px;
          color: #2d3748;
          font-size: 2.2rem;
          font-weight: 600;
          background: linear-gradient(135deg, #2d3748, #4a5568);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .schools-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          gap: 30px;
        }

        .loading,
        .error {
          text-align: center;
          padding: 60px;
          font-size: 1.2rem;
          color: #718096;
        }

        .error {
          color: #e53e3e;
          background: rgba(229, 62, 62, 0.1);
          padding: 20px;
          border-radius: 12px;
          border: 1px solid rgba(229, 62, 62, 0.2);
        }

        .empty-state {
          text-align: center;
          padding: 80px 40px;
          background: white;
          border-radius: 16px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
          border: 1px solid #e2e8f0;
        }

        .empty-state p {
          margin-bottom: 30px;
          color: #4a5568;
          font-size: 1.3rem;
          font-weight: 500;
        }

        .cta-button {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 14px 28px;
          background: linear-gradient(135deg, #4299e1, #667eea);
          color: white;
          text-decoration: none;
          border-radius: 8px;
          font-weight: 600;
          transition: all 0.2s ease;
          box-shadow: 0 2px 4px rgba(66, 153, 225, 0.3);
        }

        .cta-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 8px rgba(66, 153, 225, 0.4);
        }

        @media (max-width: 768px) {
          .header-content {
            flex-direction: column;
            height: auto;
            padding: 1rem;
            gap: 1rem;
          }

          .logo h1 {
            font-size: 1.5rem;
          }

          .nav-tabs {
            width: 100%;
            justify-content: center;
          }

          .nav-tab {
            padding: 8px 16px;
            font-size: 0.9rem;
          }

          main {
            padding: 20px 15px;
          }

          h2 {
            font-size: 1.8rem;
            margin-bottom: 30px;
          }

          .schools-grid {
            grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
            gap: 20px;
          }

          .empty-state {
            padding: 40px 20px;
          }

          .empty-state p {
            font-size: 1.1rem;
          }
        }

        @media (max-width: 480px) {
          .nav-tabs {
            flex-direction: column;
            width: 100%;
          }

          .nav-tab {
            justify-content: center;
            text-align: center;
          }

          .logo {
            justify-content: center;
          }

          .schools-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
};

export default ShowSchools;
