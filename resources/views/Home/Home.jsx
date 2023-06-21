import './Home.css'

import Platform from '../../js/components/Platforms/Platform'
import Carousel from '../../js/components/Carousel/Carousel'

import Logo from '../../../public/assets/dontnod.png'
import DontTeam from '../../../public/assets/dontTeam.png'

import {MdOutlineKeyboardDoubleArrowDown} from 'react-icons/md'
import {HiOutlineArrowNarrowRight} from 'react-icons/hi'

import { motion } from 'framer-motion'

const Home = () => {

    return (
        <motion.div className='home' initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}>
        <div className='home-welcome'>
        <img src={Logo} className='home-logo'/>
        </div>
        <h1 className='home--text--discover'>Discover our world</h1>
        <div className='home--arrow--down'><MdOutlineKeyboardDoubleArrowDown /></div>
            <Platform />
            <Carousel /> 
        <div className='home--about'>
        <div className='home--about--text'>
            <h1 style={{marginBottom: `10px`}}>ABOUT <span style={{ color: `#009B96`}}>US</span></h1>
            <p style={{fontWeight: `200`, marginBottom: `20px`, lineHeight: `25px`}}>We are Don't Nod, a video game developer based in France, known for our engaging storytelling. We create exciting gaming experiences that combine action, adventure and RPG elements. With a strong attention to detail and story, we continue to inspire and entertain gamers around the world.</p>
            <a href='/about'><button className='home--about--button'>READ MORE<HiOutlineArrowNarrowRight className='home--about--button--arrow'/></button></a>
        </div>
        <div>
            <img src={DontTeam} className='home--about--img'/>
        </div>
        </div>
        </motion.div>
    )
}


export default Home