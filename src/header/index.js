import React from 'react';

import './header.css'

export const Header = ()=> {
    return (
        <div className='header'>
        <div className='logo'><p>Movie</p></div>
        <div className='favorit'>
        <button>favorit</button>
        </div>
        </div>
    )
}