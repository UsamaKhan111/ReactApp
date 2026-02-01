
import axios from 'axios';
import { use, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form'
import { useOutletContext } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function AddUser() {
    const { register, handleSubmit, reset } = useForm();
    const { setUsers } = useOutletContext();
    const navigate = useNavigate();
    const onSubmit = async (data) => {
        const forApiData = {
            name: data.name,
            email: data.email,
            username: data.username,
            company: {
                catchPhrase: data.catchPhrase,
            },
            website: data.website,
        };

        try {

            const response = await axios.post(
                "https://jsonplaceholder.typicode.com/users",
                forApiData
            );

            setUsers((prev) => [...prev, response.data]);

            console.log("User added:", response.data);

            reset();
        } catch (error) {
            console.error("Error adding user", error);
        }
    };

    return (
        <div className="max-w-md mx-auto mt-10 px-6 py-4 border border-gray-300 rounded-lg shadow-md mb-6 ">
            <form onSubmit={handleSubmit(onSubmit)}>
                <h2 className="text-orange-400 text-2xl font-bold mb-4 text-center">Add User</h2>
                <div>
                    <input type="text" required id="name" className="border border-gray-300 rounded px-3 py-2 w-full text-white placeholder-gray-400" placeholder='Enter name' {...register('name')} />
                </div>
                <div className="mt-4">
                    <input type="text" required id="username" className="border border-gray-300 rounded px-3 py-2 w-full text-white placeholder-gray-400" placeholder='Enter username' {...register('username')} />
                </div>
                <div className="mt-4">
                    <input type="email" required id="email" className="border border-gray-300 rounded px-3 py-2 w-full text-white placeholder-gray-400" placeholder='Enter email' {...register('email')} />
                </div>
                <select name="website" required className="border border-gray-300 rounded px-3 py-2 w-full text-white bg-slate-900 mt-4" {...register('website')}>
                    <option value="hildegard.org">hildegard.org</option>
                    <option value="anastasia.net">anastasia.net</option>
                    <option value="kale.biz">kale.biz</option>
                    <option value="niko.com">niko.com</option>
                    <option value="jacynthe.com">jacynthe.com</option>
                </select>
                <div className="mt-4">
                    <input type="text" required id="catchPhrase" className="border border-gray-300 rounded px-3 py-2 w-full text-white placeholder-gray-400" placeholder='Enter catchphrase' {...register('catchPhrase')} />
                </div>
                <div className="mt-6">
                    <button type="submit" className="bg-orange-400 text-black font-bold px-4 py-2 rounded hover:bg-orange-500 w-full" onClick={() => navigate('/about')}>Add User</button>
                </div>
            </form>
        </div>
    )
}

export default AddUser