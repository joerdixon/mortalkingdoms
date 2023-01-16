import React from 'react';
import mklogo from '../../assets/icons/mklogo.png'

function Navigation() {
return(
    <nav className='flex justify-evenly items-center w-screen bg-gray-200 h-[50px]'>
        <a href="">Artifacts</a>
        <a href="">People</a>
        <a href=""><img src={mklogo} alt="Mortal Kingdoms Logo" className='w-20 mt-6' /></a>
        <a href="">Map</a>
        <a href="">Link</a>
    </nav>
)
};

export default Navigation;  