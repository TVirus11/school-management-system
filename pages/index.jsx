import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <div style={containerStyle}>
      <Head>
        <title>School Management System</title>
        <meta
          name="description"
          content="Manage school information efficiently"
        />
      </Head>

      <main style={mainStyle}>
        <div style={headerStyle}>
          <div style={logoStyle}>
            <span style={logoIconStyle}>🏫</span>
            <h1 style={h1Style}>School Manager</h1>
          </div>
          <p style={taglineStyle}>Simple School Management System</p>
        </div>

        <div style={cardsContainerStyle}>
          <Link href="/addSchool" style={cardLinkStyle}>
            <div style={cardStyle}>
              <div style={cardContentStyle}>
                <div style={cardIconStyle}>➕</div>
                <h2 style={cardH2Style}>Add New School</h2>
                <p style={cardPStyle}>
                  Add a new school to the database with detailed information
                </p>
                <div style={cardActionStyle}>Get Started →</div>
              </div>
            </div>
          </Link>

          <Link href="/showSchools" style={cardLinkStyle}>
            <div style={cardStyle}>
              <div style={cardContentStyle}>
                <div style={cardIconStyle}>📋</div>
                <h2 style={cardH2Style}>View Schools</h2>
                <p style={cardPStyle}>
                  Browse and manage all schools in an organized layout
                </p>
                <div style={cardActionStyle}>View Now →</div>
              </div>
            </div>
          </Link>
        </div>
      </main>

      <footer style={footerStyle}>
        <p style={footerPStyle}>© 2023 School Management System</p>
      </footer>
    </div>
  );
}

// Inline CSS styles
const containerStyle = {
  minHeight: "100vh",
  display: "flex",
  flexDirection: "column",
  backgroundColor: "#f8fafc",
  color: "#333",
  padding: "20px",
  fontFamily: "Arial, sans-serif",
};

const mainStyle = {
  flex: 1,
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  padding: "2rem 1rem",
};

const headerStyle = {
  textAlign: "center",
  marginBottom: "3rem",
  width: "100%",
};

const logoStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "15px",
  marginBottom: "1rem",
};

const logoIconStyle = {
  fontSize: "3rem",
};

const h1Style = {
  fontSize: "2.5rem",
  margin: 0,
  color: "#2d3748",
  fontWeight: "700",
};

const taglineStyle = {
  fontSize: "1.1rem",
  color: "#4a5568",
  margin: 0,
};

const cardsContainerStyle = {
  display: "flex",
  gap: "2rem",
  maxWidth: "900px",
  width: "100%",
  justifyContent: "center",
  flexWrap: "wrap",
};

const cardLinkStyle = {
  textDecoration: "none",
  color: "inherit",
  flex: 1,
  minWidth: "300px",
};

const cardStyle = {
  background: "white",
  borderRadius: "16px",
  padding: "2.5rem",
  boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1), 0 5px 10px rgba(0, 0, 0, 0.05)",
  transition: "all 0.3s ease",
  border: "1px solid #e2e8f0",
  height: "100%",
  cursor: "pointer",
};

const cardContentStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  textAlign: "center",
  height: "100%",
};

const cardIconStyle = {
  fontSize: "3.5rem",
  marginBottom: "1.5rem",
};

const cardH2Style = {
  fontSize: "1.6rem",
  margin: "0 0 1rem 0",
  color: "#2d3748",
};

const cardPStyle = {
  color: "#718096",
  lineHeight: "1.6",
  margin: "0 0 1.5rem 0",
  flexGrow: 1,
};

const cardActionStyle = {
  color: "#4299e1",
  fontWeight: "600",
  fontSize: "1.1rem",
  transition: "transform 0.2s ease",
};

const footerStyle = {
  textAlign: "center",
  padding: "1.5rem",
  marginTop: "2rem",
};

const footerPStyle = {
  margin: 0,
  color: "#718096",
};

// Add hover effects with JavaScript
if (typeof window !== "undefined") {
  // This will run only in the browser
  setTimeout(() => {
    const cards = document.querySelectorAll(
      '[style*="box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1), 0 5px 10px rgba(0, 0, 0, 0.05)"]'
    );

    cards.forEach((card) => {
      card.onmouseenter = () => {
        card.style.transform = "translateY(-5px)";
        card.style.boxShadow =
          "0 15px 35px rgba(0, 0, 0, 0.15), 0 5px 15px rgba(0, 0, 0, 0.1)";

        const action = card.querySelector('[style*="color: #4299e1"]');
        if (action) {
          action.style.transform = "translateX(5px)";
        }
      };

      card.onmouseleave = () => {
        card.style.transform = "translateY(0)";
        card.style.boxShadow =
          "0 10px 25px rgba(0, 0, 0, 0.1), 0 5px 10px rgba(0, 0, 0, 0.05)";

        const action = card.querySelector('[style*="color: #4299e1"]');
        if (action) {
          action.style.transform = "translateX(0)";
        }
      };
    });
  }, 100);
}
