import React from 'react';
import { Link } from 'react-router-dom'
import mklogo from '../../assets/icons/mklogo.png'


function Navigation() {
    return (
        <nav className='flex justify-evenly items-center w-screen bg-[#111] h-[50px]'>
            <Link to='/artifacts'>Artifacts</Link>
            <Link to='/characters'>People</Link>
            <Link to='/'><img src={mklogo} alt="Mortal Kingdoms Logo" className='w-20 mt-6' /></Link>
            <Link to='/map'>Map</Link>
            <Link to='/factions'>Factions</Link>
        </nav>
    )
};

export default Navigation;  