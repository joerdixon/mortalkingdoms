import React from 'react';
import mklogo from '../../assets/icons/mklogo.png'

function Navigation() {
return(
    <nav>
        <a href="">Link</a>
        <a href="">Link</a>
        <a href=""><img src={mklogo} alt="Mortal Kingdoms Logo" /></a>
        <a href="">Link</a>
        <a href="">Link</a>
    </nav>
)
};

export default Navigation;