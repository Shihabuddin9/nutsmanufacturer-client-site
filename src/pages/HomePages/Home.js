import React from 'react';
import PageTitle from '../Shared/PageTitle';
import FitureImg from './FitureImg';
import HomeReview from './HomeReview';
import Products from './Products';
import ProductsTools from './ProductsTools';

const Home = () => {
    return (
        <div>
            <PageTitle title="Home"></PageTitle>
            <FitureImg></FitureImg>
            <HomeReview></HomeReview>
            <Products></Products>
            <ProductsTools></ProductsTools>
        </div>
    );
};

export default Home;