/*
Image Wrapper component
Renders Images with Titles in NavBar
*/


import React from 'react';

function ImageWrapper({ image_1, image_2, dropdown_image_title1, dropdown_image_title2 }) {

    return (
        <div className="image-wrapper">
            <img alt={dropdown_image_title1} src={image_1} />
            <p>{dropdown_image_title1}</p>
            <img alt={dropdown_image_title2} src={image_2} />
            <p>{dropdown_image_title2}</p>
        </div>
    );
}

export default ImageWrapper;
