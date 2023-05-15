import { useState } from "react";
import "./App.css";
import Notes from "./pages/Notes";
import Dashboard from "./pages/Dashboard";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);
  const home = true;

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Notes home={home} />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/:id" element={<Notes />} />
          {/* <Dashboard /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
