import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import PageTitle from '../Shared/PageTitle';

const Dashboard = () => {
    return (
        <div>
            <PageTitle title="Dashboard"></PageTitle>
            <div class="drawer drawer-mobile">
                <input id="dashboard-sidebar" type="checkbox" class="drawer-toggle" />
                <div class="drawer-content">
                    <h1 className='text-3xl text-green-700'>Dashboard</h1>
                    <Outlet></Outlet>
                    {/* <label for="dashboard-sidebar" class="btn btn-primary drawer-button lg:hidden">Open drawer</label> */}

                </div>
                <div class="drawer-side">
                    <label for="dashboard-sidebar" class="drawer-overlay"></label>
                    <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">

                        <li><Link to="/dashboard">My Profile</Link></li>
                        <li><Link to="/dashboard/myOrders">My Orders</Link></li>
                        <li><Link to="/dashboard/myReview">My Review</Link></li>
                        <li><Link to="/dashboard/allUser">All Users</Link></li>

                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Dashboard;