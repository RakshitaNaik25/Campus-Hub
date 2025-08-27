import { useState, useEffect } from "react";

export default function useEvents() {
  // 🔹 Load events from localStorage
  const [events, setEvents] = useState(() => {
    const savedEvents = localStorage.getItem("events");
    return savedEvents ? JSON.parse(savedEvents) : [
      { title: "Hackathon", date: "2025-08-20" },
      { title: "Tech Talk", date: "2025-09-05" },
      { title: "Cultural Fest", date: "2025-10-10" },
    ];
  });

  // 🔹 Save to localStorage when events change
  useEffect(() => {
    localStorage.setItem("events", JSON.stringify(events));
  }, [events]);

  // 🔹 Log whenever an event is added
  useEffect(() => {
    if (events.length > 0) {
      const latestEvent = events[events.length - 1];
      console.log(`New event added: ${latestEvent.title} on ${latestEvent.date}`);
    }
  }, [events]);

  // Add new event
  const addEvent = (event) => {
    setEvents([...events, event]);
  };

  // Delete event by index
  const deleteEvent = (index) => {
    setEvents(events.filter((_, i) => i !== index));
  };

  // Update event by index
  const updateEvent = (index, updatedEvent) => {
    const updatedEvents = events.map((e, i) => (i === index ? updatedEvent : e));
    setEvents(updatedEvents);
  };

  return { events, addEvent, deleteEvent, updateEvent };
}
