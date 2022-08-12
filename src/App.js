import React from 'react'
import ImgCard from './Components/ImgCard';
import { RiRefreshFill } from "react-icons/ri"
import { BsCircleHalf } from "react-icons/bs"
import {BsFillArrowUpCircleFill} from "react-icons/bs"
import { Link } from 'react-scroll';

const App = () => {

  const refreshThePage = () => {
    window.location.reload();
    alert("refreshing...");
  }

  const darkMode = () =>{
    document.body.classList.toggle("dark");
  }

  return (
    <>
      {/* theme div */}
      <div className='dark:bg-slate-900 mt-0 pt-0' >
        <RiRefreshFill onClick={refreshThePage} className='text-2xl text-purple-800 dark:text-purple-300 dark:rounded-full dark:bg-purple-900 fixed z-[2] mt-32 ml-[92%]' />

        <BsCircleHalf onClick={darkMode} className='text-xl text-purple-800 dark:text-purple-300 dark:rounded-full dark:bg-purple-900 fixed z-[2] mt-40 ml-[92.5%]' />

       <Link to="buttonsDiv" smooth={true} duration={2000}>
       <BsFillArrowUpCircleFill className='text-xl text-purple-800 dark:text-purple-300 dark:rounded-full dark:bg-purple-900 fixed z-[2] mt-48 ml-[92.5%]' />
       </Link>
        

        <ImgCard />
      </div>
    </>
  );
}

export default App
