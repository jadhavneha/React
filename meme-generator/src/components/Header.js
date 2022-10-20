import React from 'react';
import logo from './/images/troll.png';
export default function Header(){
return(
    <header className="header">
        <img 
        src={logo} alt="" 
        className="header--logo"
        />
        <h2 className="header--title">Meme Generator</h2>
    </header>
)
}