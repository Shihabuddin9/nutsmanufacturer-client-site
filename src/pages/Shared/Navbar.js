import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';

const Navbar = () => {
    const [user] = useAuthState(auth)
    const menuItems = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/products'>Products</Link></li>
        <li><Link to='/blog'>Blog</Link></li>
        <li><Link to='/dashboard'>Dashboard</Link></li>
        {
            user ? <li><Link onClick={() => {
                signOut(auth);
                localStorage.removeItem('accessToken')
            }} to='/signin'>Sign Out</Link></li>
                :
                <li><Link to='/signin'>SignIn</Link></li>
        }
        {
            !user && <li><Link to='/signup'>SignUp</Link></li>
        }
        <li title='My Profile'><Link to="/profile">{user?.displayName}</Link></li>
    </>
    return (
        <div class="navbar bg-cyan-700">
            <div class="navbar-start">
                <div class="dropdown">
                    <label tabindex="0" class="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuItems}
                    </ul>
                </div>
                <Link to='/' class=""><span className='text-white text-3xl font-bold font-serif'>N</span><span className='text-white'>utsManufacture</span></Link>
            </div>
            <div class="navbar-center hidden lg:flex">
                <ul class="menu menu-horizontal p-0 text-white">
                    {menuItems}
                </ul>
            </div>
            <div className="navbar-end md:hidden">
                <label tabIndex="1" for="dashboard-sidebar" className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>

            </div>
        </div>
    );
};

export default Navbar;