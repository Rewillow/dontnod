import React from "react";
import AppRouter from "../appRouter";
import Navbar from "./Navbar/Navbar";
import HideNavbar from './HideNavbar/HideNavbar'
import Footer from "./Footer/Footer";
import DarkMode from "./DarkMode/DarkMode";


const App = () => {
    return <>
        <HideNavbar>
        <Navbar />
        </HideNavbar>
        <AppRouter />
        <HideNavbar>
        <Footer />
        </HideNavbar>
    </>
}

export default App