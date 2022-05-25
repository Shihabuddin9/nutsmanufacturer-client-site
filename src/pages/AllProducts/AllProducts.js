import React from 'react';
import Products from '../HomePages/Products';
import PageTitle from '../Shared/PageTitle';

const AllProducts = () => {
    return (
        <div>
            <PageTitle title="Products"></PageTitle>
            <Products></Products>
        </div>
    );
};

export default AllProducts;