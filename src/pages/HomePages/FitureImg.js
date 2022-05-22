import React from 'react';
import fitureImg from '../images/fiture-img.png'

const FitureImg = () => {
    return (
        <div>
            <img className='w-full' src={fitureImg} alt="" style={{ height: '450px' }} />
        </div>
    );
};

export default FitureImg;