import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Login from './components/Login';
import Register from "./components/Registration"
import LoginHome from './components/LoginHome';
import Community from './components/Community';
import Events from './components/Events';
import Prayers from './components/Prayers';
import Resources from './components/Resources';
import Footer from './components/Footer';
import VerifyByEmail from './components/verify/VerifyByEmail';
import ResetPassword from './components/verify/ResetPassword';
function App() {
  return (
    <>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/home' element={<LoginHome />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path='/community' element={<Community />} />
          <Route path='/events' element={<Events />} />
          <Route path='/prayers' element={<Prayers />} />
          <Route path='/resources' element={<Resources />} />
          <Route path='/verify/verifybyemail' element={<VerifyByEmail/>}/>
          <Route path='/verify/resetpassword' element={<ResetPassword/>}/>
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
