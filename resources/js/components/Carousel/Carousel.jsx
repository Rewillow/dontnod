import './Carousel.css'

import CarouselItem from "./CarouselItem"

import Rememberme from "../../../../public/assets/RememberMe.png"
import LifeIsStrange from "../../../../public/assets/LifeIsStrange.png"
import Vampyr from "../../../../public/assets/Vampyr.png"
import CaptainSpirit from "../../../../public/assets/CaptainSpirit.png"
import LifeIsStrange2 from "../../../../public/assets/LifeIsStrange2.png"
import TellMeWhy from "../../../../public/assets/TellMeWhy.png"
import TwinMirror from "../../../../public/assets/TwinMirror.png"
import Gerda from "../../../../public/assets/Gerda.png"
import Banishers from "../../../../public/assets/Banishers.png"
import Harmony from "../../../../public/assets/Harmony.png"

import { useState } from 'react'

import {AiOutlineArrowLeft, AiOutlineArrowRight} from 'react-icons/ai'
import {IoMdRadioButtonOn} from 'react-icons/io'


const Carousel = () => {

    const [activeIndex, setActiveIndex] = useState(0); // Essendo impostato a 0, indica il primo elemento dell'array

    const items = [ // Creo un array che conterrà tutte le varie immagini
        {
            id:1,
            image: Rememberme
        },
        
        {
            id:2,
            image: LifeIsStrange
        },
        {
            id:3,
            image: Vampyr
        },
        {
            id:4,
            image: CaptainSpirit
        },
        {
            id:5,
            image: LifeIsStrange2
        },
        {
            id:6,
            image: TellMeWhy
        },
        {
            id:7,
            image: TwinMirror
        },
        {
            id:8,
            image: Gerda
        },
        {
            id:9,
            image: Banishers
        },
        {
            id:10,
            image: Harmony
        }
    ]

    const updateIndex = (newIndex) => {
        if (newIndex < 0) {
            newIndex = 0;
        } else if (newIndex >= items.length) {
            newIndex = 0;
        } 

        setActiveIndex(newIndex);
    }

    return (
        <div className="carousel">
        <h1 style={{ color: `white` }}>OUR <span style={{ color: `#009B96` }}>TITLES</span></h1>
        <h3 style={{ color: `white`, fontWeight: `300`, textAlign: `center` }}>These are the games created by our team!</h3>
        <div className='inner' style={{ transform: `translateX(${-activeIndex * 100}%)` }}>
            {items.map((item) => {
                return <CarouselItem item={item} key={item.id}/>
            })}
        </div>
        <div className='carousel-buttons'>
            <button className='button-arrow' onClick={() => {(updateIndex(activeIndex - 1))}}>
                <AiOutlineArrowLeft />
            </button>
            <div className='indicators'>
            {items.map((item, index) => {
                return (
                <button className='indicator-buttons' onClick={() => {updateIndex(index)}}>
                    <span className={`indicator-symbol ${index === activeIndex ? "indicator-symbol-active" : "indicator-symbol"}`}>
                        <IoMdRadioButtonOn />
                    </span>
                </button>
                )
            })}
            </div>
            <button className='button-arrow' onClick={() => {(updateIndex(activeIndex + 1))}}>
                <AiOutlineArrowRight />
            </button>
        </div>
        </div>
    )
}

export default Carousel