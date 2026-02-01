import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import { Navigate, Outlet } from 'react-router-dom'
import { useEffect, useState } from "react";
import axios from 'axios';

function Layout() {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem("user");
    return savedUser ? JSON.parse(savedUser) : null;
  });

  useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get('https://jsonplaceholder.typicode.com/users');
          setUsers(response.data.slice(0, 8));
        } catch (error) {
          console.log('Error fetching data:', error);
        }
      };
      fetchData();
    }, []);

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const logout = () => {
    localStorage.removeItem("user");
    setUser(null);
    setIsLoggedIn(false);
    Navigate("/");
  };
  return (
    <>
      <Header user={user} logout={logout} isLoggedIn={isLoggedIn}/>
      <Outlet context={{ user, setUser, isLoggedIn, setIsLoggedIn, users, setUsers }}/>
      <Footer />
    </>
  )
}

export default Layout