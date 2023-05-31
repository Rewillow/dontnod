import "./DarkMode.css";
import { useEffect } from "react";

import {IoMdMoon, IoMdSunny} from 'react-icons/io'

import Moon from "./Moon.svg"
import Sun from "./Sun.svg"

const DarkMode = () => {
  const setDarkMode = () => {
    document.querySelector('body').setAttribute('data-theme', 'dark');
    localStorage.setItem('selectedTheme', 'dark');
  };

  const setLightMode = () => {
    document.querySelector('body').setAttribute('data-theme', 'light');
    localStorage.setItem('selectedTheme', 'light');
  };

  const selectedTheme = localStorage.getItem('selectedTheme');

  useEffect(() => {
    if (selectedTheme === 'dark') {
      setDarkMode();
    } else {
      setLightMode();
    }
  }, [selectedTheme]);

  const toggleTheme = (e) => {
    if (e.target.checked) {
      setDarkMode();
    } else {
      setLightMode();
    }
  };

  return (
    <div className='dark_mode'>
      <input
        className='dark_mode_input'
        type='checkbox'
        id='darkmode-toggle'
        onChange={toggleTheme}
        defaultChecked={selectedTheme === 'dark'}
      />
      <label className='dark_mode_label' htmlFor='darkmode-toggle'>
        {/* <Moon />
        <Sun /> */}
      </label>
    </div>
  );
};

export default DarkMode;
