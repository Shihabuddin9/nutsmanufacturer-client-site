import React from 'react';
import fitureImg from '../images/fiture-img.png'
import './fitureImg.css'

const FitureImg = () => {
    return (
        <div>
            <img className='w-full fitureImg' src={fitureImg} alt="" />
        </div>
    );
};

export default FitureImg;