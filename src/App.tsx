import './App.css';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

import { About } from './pages/About';
import { Header } from './component/Header';

function App() {
  const location = useLocation();
  const showTabs = location.pathname !== '/screensaver';

  return (
    <>
      {showTabs && <Header />}
        <Routes>
          <Route path="/" element={<About />} />
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
