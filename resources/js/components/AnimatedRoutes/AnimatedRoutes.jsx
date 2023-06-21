import {Routes, Route, useLocation} from 'react-router-dom'

import Play from '../Play/Play'
import Home from '../../../views/Home/Home'
import Games from '../../../views/Games/Games'
import SingleGame from '../../../views/Games/SingleGame'
import About from '../../../views/About/About'
import Login from '../../../views/Login/Login'
import SignUp from '../../../views/SignUp/SignUp'
import Profile from '../../../views/Profile/Profile'
import ContactUs from '../ContactUs/ContactUs'

import {AnimatePresence} from 'framer-motion'




const AnimatedRoutes = () => {
    const location = useLocation()

    return (
        <AnimatePresence>
        <Routes location={location} key={location.pathname}>
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
      </AnimatePresence>
    )
}

export default AnimatedRoutes