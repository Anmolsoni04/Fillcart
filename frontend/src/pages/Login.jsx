import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    // Here we create states

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    // Here we create a function to handle login
    const handlelogin = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/api/accounts/login/', { username, password });
            alert(response.data.message);
            navigate('/');
        } catch (error) {
            alert(error.response.data.error);
        }
    };

    return (
        <div className='flex justify-center items-center h-screen bg-gray-100'>
            <form onSubmit={handlelogin} className='bg-white p-6 rounded shadow-md w-80'>
                <h2 className='text-lg font-bold mb-4'>Login</h2>
                <input
                    type='text'
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder='Username'
                    className='border p-2 w-full mb-4' required
                />
                <input
                    type='password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder='Password'
                    className='border p-2 w-full mb-4' required
                />
                <div className='mb-4'>
                    <input id='password' placeholder='acknowledging password' className='bg-gray-100 p-2 rounded-md w-full' value={password} onchange={(e) => setPassword(e.target.value)} type='text' required />
                </div>
                <button type='submit' className='bg-blue-500 text-white w-full p-2 rounded'>Login</button>
                <p className='mt-4 text-sm'>New To Fillcart? <a href='/register' className='text-blue-500 hover:underline'> Register </a></p>
            </form>
        </div>
    );
};

export default Login;