const SchoolCard = ({ school }) => {
  return (
    <div className="school-card">
      <div className="school-image">
        <img
          src={school.image || "/placeholder-school.jpg"}
          alt={school.name}
          onError={(e) => {
            e.target.src = "/placeholder-school.jpg";
          }}
        />
      </div>
      <div className="school-info">
        <h3>{school.name}</h3>
        <p className="address">{school.address}</p>
        <p className="city">{school.city}</p>
      </div>

      <style jsx>{`
        .school-card {
          border: 1px solid #e0e0e0;
          border-radius: 8px;
          overflow: hidden;
          transition: transform 0.2s, box-shadow 0.2s;
          background: white;
          height: 100%;
          display: flex;
          flex-direction: column;
        }

        .school-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
        }

        .school-image {
          height: 200px;
          overflow: hidden;
        }

        .school-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.3s;
        }

        .school-card:hover .school-image img {
          transform: scale(1.05);
        }

        .school-info {
          padding: 15px;
          flex-grow: 1;
          display: flex;
          flex-direction: column;
        }

        h3 {
          margin: 0 0 10px 0;
          font-size: 18px;
          color: #333;
        }

        .address {
          margin: 0 0 8px 0;
          color: #666;
          font-size: 14px;
          line-height: 1.4;
          flex-grow: 1;
        }

        .city {
          margin: 0;
          color: #888;
          font-size: 14px;
        }

        @media (max-width: 768px) {
          .school-image {
            height: 160px;
          }

          .school-info {
            padding: 12px;
          }

          h3 {
            font-size: 16px;
          }
        }
      `}</style>
    </div>
  );
};

export default SchoolCard;
