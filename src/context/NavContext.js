/*
Context API for NavBar component
This is where the main Logic is held for the NavBar
data is stored from test.js file via import 
navlinks are passed to context to set the navigation bar
[isHovering, setIsHovering] state to make the sub-navigation appear via boolean value
[sortMenus, setSortMenus] state if I had more time I would have like to go through the data set and see if there was an object
to sort therefore I created another Object which contains filter data
This Context is passed through the Application
*/

import React, { createContext, useState, useEffect } from 'react'
import data from './testData'

export const NavContext = createContext();

const NavContextProvider = (props) => {

    const navLinks = data.navCatagories;
    const [isHovering, setIsHovering] = useState(false);
    const [subNavTitle, setSubNavTitle] = useState('');

    const [sortMenus, setSortMenus] = useState([{
        category_path: "",
        col1: [],
        col2: [],
        col3: [],
        image_1 : null,
        image_2 : null,
        image_3 : null,
        image_4 : null,
        dropdown_image_title1 : null,
        dropdown_image_title2 : null,
        dropdown_image_title3 : null,
        dropdown_image_title4 : null,
    }]);

    useEffect(() => {
        const SortData = () => {
            navLinks.map((item) => {
                if (item.category_path === subNavTitle) {
                    const col1 = item.children_data.filter((item => item.include_in_menu === 1 && item.include_in_menu_column2 === false && item.include_in_menu_column3 === false))
                    const col2 = item.children_data.filter((item => item.include_in_menu === 1 && item.include_in_menu_column2 === true && item.include_in_menu_column3 === false))
                    const col3 = item.children_data.filter((item => item.include_in_menu === 1 && item.include_in_menu_column2 === false && item.include_in_menu_column3 === true))
                    const image_1 = item.dropdown_image_url1 
                    const image_2 = item.dropdown_image_url2
                    const image_3 = item.dropdown_image_url3
                    const image_4 = item.dropdown_image_url4
                    const dropdown_image_title1 = item.dropdown_image_title1 
                    const dropdown_image_title2 = item.dropdown_image_title2 
                    const dropdown_image_title3 = item.dropdown_image_title3 
                    const dropdown_image_title4 = item.dropdown_image_title4 

                    setSortMenus([{
                        category_path: subNavTitle,
                        col1: [...col1],
                        col2: [...col2],
                        col3: [...col3],
                        image_1,
                        image_2,
                        image_3,
                        image_4,
                        dropdown_image_title1,
                        dropdown_image_title2,
                        dropdown_image_title3,
                        dropdown_image_title4,
                    }])
                }
                return null
    
            })
        }

        SortData()
    }, [subNavTitle,navLinks]);


    return (
        <NavContext.Provider value={{ navLinks, setIsHovering, isHovering, subNavTitle, setSubNavTitle, sortMenus}}>
            {props.children}
        </NavContext.Provider>
    )
}
export default NavContextProvider;
