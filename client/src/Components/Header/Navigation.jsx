import React from 'react';
import mklogo from '../../assets/icons/mklogo.png'

function Navigation() {
return(
    <nav className='flex'>
        <a href="">Link</a>
        <a href="">Link</a>
        <a href=""><img src={mklogo} alt="Mortal Kingdoms Logo" className='w-24' /></a>
        <a href="">Link</a>
        <a href="">Link</a>
    </nav>
)
};

export default Navigation;