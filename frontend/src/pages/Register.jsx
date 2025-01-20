import React, { useState } from 'react';
import axios from 'axios';

const Register = () => {
    // Here we create states

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    // Here we create a function to handle login
    const handleRegister = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/api/accounts/register/', { username, password });
            alert(response.data.message);
        } catch (error) {
            alert(error.response.data.error);
        }
    };

    return (
        <div className='flex justify-center items-center h-screen bg-gray-100'>
            <form onSubmit={handleRegister} className='bg-white p-6 rounded shadow-md w-80'>
                <h2 className='text-lg font-bold mb-4'>Register</h2>
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
                    <input id='password' placeholder='acknowledging password' className='bg-gray-100 p-2 rounded-md w-full' value={password} onChange={(e) => setPassword(e.target.value)} type='text' required />
                </div>
                <button type='submit' className='bg-blue-500 text-white w-full p-2 rounded'>Register</button>
                <p className='mt-4 text-sm'>Already have an account? <a href='/login' className='text-blue-500 hover:underline'> Login </a></p>
            </form>
        </div>
    );
};

export default Register;