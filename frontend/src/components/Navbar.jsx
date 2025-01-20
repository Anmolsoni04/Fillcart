import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className='bg-blue-600 p-4 flex justify-between items-center text-white'>
            <div className='font-bold text-lg'>
                <Link className='italic text-xl' to="/">FillCart</Link>
                <div>
                    <span className='text-yellow-300 text-base italic'>Smart way to shop</span>
                </div>
            </div>
            <div className='flex items-center space-x-4'>
                <Link to='/cart' className='hover:underline'>🛒 Cart</Link>
                <Link to='/profile' className='hover:underline'>Profile</Link>
            </div>
        </nav>
    );
};

export default Navbar;