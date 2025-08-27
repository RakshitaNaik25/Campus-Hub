// 1. Variables & Functions
let events = [
  { title: "Hackathon", date: "2025-08-20" },
  { title: "Guest Lecture", date: "2025-09-05" },
  { title: "Sports Day", date: "2025-07-15" }
];

// Function to render events
function renderEvents() {
  const container = document.querySelector("#eventsContainer");
  container.innerHTML = ""; // Clear old events

  events.forEach(event => {
    let status = "";
    const today = new Date().toISOString().split("T")[0]; // current date in yyyy-mm-dd

    // 2. Conditionals
    if (event.date < today) {
      status = `<span class="badge bg-danger">Expired</span>`;
    } else {
      status = `<span class="badge bg-success">Upcoming</span>`;
    }

    // Create event card
    const card = `
      <div class="col-md-4 mb-3">
        <div class="card shadow">
          <div class="card-body">
            <h5 class="card-title">${event.title}</h5>
            <p class="card-text">Date: ${event.date}</p>
            ${status}
          </div>
        </div>
      </div>
    `;
    container.innerHTML += card;
  });
}

// 3. DOM Manipulation & Form Handling
document.querySelector("#eventForm").addEventListener("submit", function(e) {
  e.preventDefault(); // stop page refresh

  const title = document.querySelector("#title").value;
  const date = document.querySelector("#date").value;

  if (title && date) {
    events.push({ title, date }); // add new event
    renderEvents(); // re-render events
    this.reset(); // clear form
  }
});

// Initial render
renderEvents();
