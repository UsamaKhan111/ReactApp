import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import { Navigate, Outlet } from 'react-router-dom'
import { useState } from "react";

function Layout() {
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem("user");
    return savedUser ? JSON.parse(savedUser) : null;
  });
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
      <Outlet context={{ user, setUser, isLoggedIn, setIsLoggedIn }}/>
      <Footer />
    </>
  )
}

export default Layout