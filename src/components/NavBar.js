/*
NavBar component
Renders Logo
  <CategoryTitles/> for navigation
*/

import React  from 'react';
import Logo from './Logo'
import CategoryTitles from './CategoryTitles'

function NavBar() {

    return (
        <header>
            <Logo />
            <CategoryTitles/>
        </header>
    );
}

export default NavBar;
