import Head from "next/head";
import Link from "next/link";
import SchoolForm from "../components/SchoolForm";

const AddSchool = () => {
  return (
    <div className="page-container">
      <Head>
        <title>Add School - School Directory</title>
        <meta name="description" content="Add a new school to the directory" />
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
              <Link href="/addSchool" className="nav-tab active">
                <span className="tab-icon">➕</span>
                Add School
              </Link>
              <Link href="/showSchools" className="nav-tab">
                <span className="tab-icon">👁️</span>
                View Schools
              </Link>
            </div>
          </nav>
        </div>
      </header>

      <main>
        <SchoolForm />
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
          padding: 40px 0;
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
            padding: 20px 0;
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
        }
      `}</style>
    </div>
  );
};

export default AddSchool;
