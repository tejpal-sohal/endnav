/*
CategoryTitles component
Renders CategoryTitles for navigation and sets isHovering = True/false show hide the SubNavComponent 
onMouseEnter I set the value for setSubNavTitle  based on textContent which then updates state in Context with new values
*/


import React, { useContext } from 'react';
import { NavContext } from '../context/NavContext'
import SubNavComponent from "./SubNavComponent"


function CategoryTitles() {

    const { navLinks, setIsHovering, setSubNavTitle, isHovering } = useContext(NavContext)
    return (
        <div className="navigation" > {
            navLinks.map((title, k) => {
                return (
                    <span onMouseEnter={(e) => { setIsHovering(true); setSubNavTitle(e.target.textContent); }}
                        onMouseLeave={() => setIsHovering(false)} key={k}
                        className="menu-item">
                        <a className="menu-item-link" href={`/${title.url_path}`}>
                            {title.category_path}</a>
                    </span>
                )
            })
        }

            {isHovering && <SubNavComponent />}

        </div>



    );
}

export default CategoryTitles;