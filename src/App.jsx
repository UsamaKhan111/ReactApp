
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './Layout/Layout'
import Home from './Layout/Home';
import About from './Layout/About';
import Contact from './Layout/Contact';
import Login from './Layout/Components/Auth/Login';
import Signup from './Layout/Components/Auth/signup';
import AddUser from './Layout/Components/AddUser';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
          <Route path="adduser" element={<AddUser />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;   