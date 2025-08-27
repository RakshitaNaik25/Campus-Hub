import React, { useState } from "react";
import EventCard from "./EventCard";
import useEvents from "../hooks/useEvents";

function EventList() {
  const { events, addEvent, deleteEvent, updateEvent } = useEvents();
  const [newEvent, setNewEvent] = useState({ title: "", date: "" });
  const [editIndex, setEditIndex] = useState(null);
  const [editEvent, setEditEvent] = useState({ title: "", date: "" });

  // handle input changes (new event form)
  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewEvent({ ...newEvent, [name]: value });
  };

  // add new event
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newEvent.title || !newEvent.date) return;
    addEvent(newEvent);
    setNewEvent({ title: "", date: "" });
  };

  // start editing
  const handleEdit = (index) => {
    setEditIndex(index);
    setEditEvent(events[index]);
  };

  // handle edit input change
  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditEvent({ ...editEvent, [name]: value });
  };

  // save update
  const handleUpdate = (index) => {
    updateEvent(index, editEvent);
    setEditIndex(null);
    setEditEvent({ title: "", date: "" });
  };

  // cancel editing
  const handleCancel = () => {
    setEditIndex(null);
    setEditEvent({ title: "", date: "" });
  };

  return (
    <section style={styles.container}>
      <h2>Upcoming Events</h2>

      {/* Add Event Form */}
      <form onSubmit={handleSubmit} style={styles.form}>
        <input
          type="text"
          name="title"
          placeholder="Event Title"
          value={newEvent.title}
          onChange={handleChange}
          style={styles.input}
        />
        <input
          type="date"
          name="date"
          value={newEvent.date}
          onChange={handleChange}
          style={styles.input}
        />
        <button type="submit" style={styles.button}>
          Add Event
        </button>
      </form>

      {/* Event List */}
      {events.map((event, index) => (
        <div key={index} style={styles.eventRow}>
          {editIndex === index ? (
            // Edit Mode
            <>
              <input
                type="text"
                name="title"
                value={editEvent.title}
                onChange={handleEditChange}
                style={styles.input}
              />
              <input
                type="date"
                name="date"
                value={editEvent.date}
                onChange={handleEditChange}
                style={styles.input}
              />
              <button onClick={() => handleUpdate(index)} style={styles.saveBtn}>
                Save
              </button>
              <button onClick={handleCancel} style={styles.cancelBtn}>
                Cancel
              </button>
            </>
          ) : (
            // Normal View via EventCard
            <EventCard
              title={event.title}
              date={event.date}
              onEdit={() => handleEdit(index)}
              onDelete={() => deleteEvent(index)}
            />
          )}
        </div>
      ))}
    </section>
  );
}

const styles = {
  container: {
    maxWidth: "600px",
    margin: "2rem auto",
    padding: "1rem",
  },
  form: {
    display: "flex",
    gap: "1rem",
    marginBottom: "1.5rem",
  },
  input: {
    flex: "1",
    padding: "0.5rem",
    borderRadius: "4px",
    border: "1px solid #ccc",
  },
  button: {
    padding: "0.5rem 1rem",
    border: "none",
    borderRadius: "4px",
    backgroundColor: "#3498db",
    color: "white",
    cursor: "pointer",
  },
  eventRow: {
    marginBottom: "1rem",
  },
  saveBtn: {
    background: "#27ae60",
    border: "none",
    padding: "0.3rem 0.6rem",
    borderRadius: "4px",
    cursor: "pointer",
    color: "white",
    marginRight: "0.5rem",
  },
  cancelBtn: {
    background: "#7f8c8d",
    border: "none",
    padding: "0.3rem 0.6rem",
    borderRadius: "4px",
    cursor: "pointer",
    color: "white",
  },
};

export default EventList;
