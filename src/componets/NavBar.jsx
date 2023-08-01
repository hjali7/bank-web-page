import useWindoSize from '../hooks/useWindoSize'
import {logo} from '../assets/index'
import { MenuOutlined , CloseOutlined} from "@mui/icons-material";
import { Box } from '@mui/material';
import ClickAwayListener from '@mui/base/ClickAwayListener';
import { useState } from 'react';
const NavBar = () => {
    const {width} = useWindoSize()
    const [active , setActive] = useState(false)
    const handleActive = e=> {
        setActive(!active)
    }
  return (
    <div className='flex justify-between items-center px-4'>
        <div className="flex justify-content items-center">
            <img src={logo} alt="HooBank" className='w-40 h-16 cursor-pointer'/>
        </div>1
        {width < 888 ? (
            <div onClick={handleActive} className='text-white'>
                {active ? <MenuOutlined /> : <MenuOutlined />}
                {active ? (<div className='rounded-l-2xl flex justify-between flex-col items-center absolute top-14 right-0 text-gray-200 bg-gray-700 drop-shadow-2xl z-10 h-60 p-4'>
                <a href="#Home" target='_blank' className='hover:text-gray-400'>Home</a>
                <a href="#Home" target='_blank' className='hover:text-gray-400'>About Us</a>
                <a href="#Home" target='_blank' className='hover:text-gray-400'>Features</a>
                <a href="#Home" target='_blank' className='hover:text-gray-400'>Solution</a>
        </div>) : undefined}
            </div>
        ) : (<div className='flex justify-between items-center text-gray-200 w-1/3 '>
            <a href="#Home" target='_blank' className='hover:text-gray-400'>Home</a>
            <a href="#Home" target='_blank' className='hover:text-gray-400'>About Us</a>
            <a href="#Home" target='_blank' className='hover:text-gray-400'>Features</a>
            <a href="#Home" target='_blank' className='hover:text-gray-400'>Solution</a>
        </div> )} 
    </div>
  )
}

export default NavBar

