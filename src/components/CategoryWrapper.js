/*
Category Wrapper component
Renders subNavigation items for Category titles
*/


import React from 'react';

function CategoryWrapper({ category }) {
    return (
        <div >{
            category.map((item, k) => {
                return <div className="category-menu-item" key={k}><a href={item.url_path}>{item.name}</a></div>
            })
        }
        </div>
    );
}

export default CategoryWrapper;
