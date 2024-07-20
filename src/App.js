import './App.css';
import Header from './components/header/index.jsx';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/signin/index.jsx';
import Signup from './pages/signup/index.jsx';
import ChangePassword from './pages/manageAccount/index.jsx';
import HomePage from './pages/homepage/index.jsx';
import HomeLogged from './pages/homepage/Logged.jsx';
import Footer from './components/footer/index.jsx'; 
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const App = () => {
  return (
    <Router>
      <Routes> 
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/change-password" element={<ChangePassword />} />
        <Route path="/header" element={<Header />} />
        <Route path="/footer" element={<Footer />} />
        <Route path="/homelogged" element={<HomeLogged />} /> 
        <Route path="/" element={<HomePage />} /> 
      </Routes>
    </Router>
  )
}

export default App;
