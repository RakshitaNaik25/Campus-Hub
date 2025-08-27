import React from "react";
import Header from "./components/Header";
import EventList from "./components/EventList";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Header />
      <main>
        <EventList />
      </main>
      <Footer />
    </div>
  );
}

export default App;
