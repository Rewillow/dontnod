import React from "react";

import {Routes, Route} from 'react-router-dom'
import Home from "../views/Home/Home";
import Games from "../views/Games/Games";
import SingleGame from "../views/Games/SingleGame";
import Login from '../views/Login/Login';
import SignUp from '../views/SignUp/SignUp';
import About from '../views/About/About'
import Play from "./components/Play/Play";
import Profile from "../views/Profile/Profile";
import ContactUs from "../js/components/ContactUs/ContactUs"


const AppRouter = () => {
    return (
        <div>
          <Routes>
            <Route path="/" element={<Play />} />
            <Route path="/home" element={<Home />} />
            <Route path="/games" element={<Games />} />
            <Route path="/games/:title" element={<SingleGame />} />
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/contact" element={<ContactUs />} />
          </Routes>
        </div>
    )
}

export default AppRouter