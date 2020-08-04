import React, { useContext } from 'react';
import { NavContext } from '../context/NavContext';
import CategoryWrapper from './CategoryWrapper';
import ImageWrapper from './ImageWrapper.js';
import ComingSoon from './ComingSoon.js';

function SubNavComponent() {
    const { setIsHovering, sortMenus } = useContext(NavContext)
    return (
        <div onMouseEnter={() => setIsHovering(true)} onMouseLeave={() => setIsHovering(false)} className="sub-nav">
            <div className="grid">
                {
                    sortMenus.map((menu, k) => {
                        return (
                            <React.Fragment key={k}>
                                {
                                    menu.col1.length ===0 && menu.col2.length === 0 && menu.col3.length === 0 ? <ComingSoon /> :
                                        (
                                            <React.Fragment>
                                                {menu.col1.length !== 0 ? <CategoryWrapper category={menu.col1} /> : null}
                                                {menu.col2.length !== 0 ? <CategoryWrapper category={menu.col2} /> : null}
                                                {menu.col3.length !== 0 ? <CategoryWrapper category={menu.col3} /> : null}
                                                {menu.image_1 || menu.image_2 !== undefined ? <ImageWrapper image_1={menu.image_1} image_2={menu.image_2} dropdown_image_title1={menu.dropdown_image_title1} dropdown_image_title2={menu.dropdown_image_title2} /> : null  }
                                                {menu.image_3 || menu.image_4 !== undefined ? <ImageWrapper image_1={menu.image_3} image_2={menu.image_4} dropdown_image_title1={menu.dropdown_image_title3} dropdown_image_title2={menu.dropdown_image_title4}/> : null }
                                            </React.Fragment>
                                        )
                                }

                            </React.Fragment>
                        )
                    })
                }
            </div>
        </div>
    );
}

export default SubNavComponent;

/* <CategoryWrapper include_in_menu={1} include_in_menu_column2={false} include_in_menu_column3={false} />
<CategoryWrapper include_in_menu={1} include_in_menu_column2={true} include_in_menu_column3={false} />
<CategoryWrapper include_in_menu={1} include_in_menu_column2={false} include_in_menu_column3={true} /> 
<ImageWrapper /> */