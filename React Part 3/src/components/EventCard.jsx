import React from "react";

function EventCard({ title, date, onEdit, onDelete }) {
  const eventDate = new Date(date);
  const today = new Date();

  // Format date like: Wednesday, 27 Aug 2025
  const formattedDate = eventDate.toLocaleDateString("en-US", {
    weekday: "long",
    day: "2-digit",
    month: "short",
    year: "numeric",
  });

  // Determine status tag
  let status = "";
  if (
    eventDate.toDateString() === today.toDateString()
  ) {
    status = "Today";
  } else if (eventDate > today) {
    status = "Upcoming";
  } else {
    status = "Ended";
  }

  return (
    <div style={styles.card}>
      <div style={styles.info}>
        <h3 style={styles.title}>{title}</h3>
        <p style={styles.date}>{formattedDate}</p>
      </div>

    <div style={styles.tagBtnBox}>
      <span style={{...styles.tag,backgroundColor:status === "Upcoming"? "#27ae60": status === "Today"? "#2980b9": "#e74c3c",}}>
        {status}
      </span>
      </div>


      <div style={styles.tagBtnBox}>
      {onEdit && (
        <button onClick={onEdit} style={styles.editBtn}>✏️</button>
      )}
            {onDelete && (
        <button onClick={onDelete} style={styles.deleteBtn}>❌</button>
      )}
    </div>
    </div>
  );
}

const styles = {
  card: {
    border: "1px solid #ccc",
    borderRadius: "8px",
    padding: "1rem",
    marginBottom: "1rem",
    boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
    backgroundColor: "#fff",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "0.5rem",
  },
  title: {
    margin: "0 0 0.2rem 0",
  },
  date: {
    margin: 0,
    fontSize: "0.9rem",
    color: "#555",
  },
  tag: {
    color: "white",
    padding: "0.3rem 0.6rem",
    borderRadius: "12px",
    fontSize: "0.8rem",
    fontWeight: "bold",
  },
  editBtn: {
    background: "#f39c12",
    border: "none",
    padding: "0.3rem 0.6rem",
    borderRadius: "4px",
    cursor: "pointer",
    color: "white",
  },
  deleteBtn: {
    background: "#e74c3c",
    border: "none",
    padding: "0.3rem 0.6rem",
    borderRadius: "4px",
    cursor: "pointer",
    color: "white",
  },

  tagBtnBox:{
    width:"22%",
    display:"flex",
    justifyContent:"space-around"
  },

  info:{
    width: "45%"
  }
};

export default EventCard;
