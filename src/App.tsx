import './App.css';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

import { About } from './pages/About';
import { Header } from './component/Header';
import { Projects } from './pages/Projects';
import { Contact } from './pages/Contact';

function App() {
  const location = useLocation();
  const showTabs = location.pathname !== '/screensaver';

  return (
    <>
      {showTabs && <Header />}
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/Projects" element={<Projects />}/>
          <Route path="/Contact" element={<Contact/>}/>
        </Routes>
    </>
  )
}

export default function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}
