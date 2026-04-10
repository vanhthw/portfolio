import React from "react"
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import Portfolio from "./pages/Portfolio";
import ProjectsDemo from "./pages/ProjectsDemo";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Portfolio />} />
        <Route path="/projects-demo" element={<ProjectsDemo />} />
      </Routes>
    </Router>
  );
};

export default App;