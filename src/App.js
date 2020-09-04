import React from "react";
import Sidebar from "./Sidebar.js";
import Chat from "./Chat.js";
import "./App.css";

function App() {
  return (
    <div className="app">
      <div className="app__body">
        <Sidebar />
        <Chat />
      </div>
    </div>
  );
}

export default App;
