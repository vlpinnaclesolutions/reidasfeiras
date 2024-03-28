import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/home";
import DashboardPainel from './pages/Dashboard/Dashboard'


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/cli/1/home" element={<Home />} />
        <Route path="/dashboard" element={<DashboardPainel />} />
      </Routes>
    </Router>
  );
}

export default App;
