import React from "react"
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useSearchParams,
  Navigate,
} from 'react-router-dom';
import Portfolio from "./components/Portfolio";


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/portfolio" element={<Portfolio />} />
      </Routes>
    </Router>
  );
};

export default App;