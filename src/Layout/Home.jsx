import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Card from './Components/Cards';

function Home() {
  const [user, setUser] = useState([]);
  useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://jsonplaceholder.typicode.com/users');
                setUser(response.data.slice(0,4));
            } catch (error) {
                console.log('Error fetching data:', error);
            }
        };
        fetchData();
    }, []);
  return (
    <>
    <div className=" w-full h-auto">
        <img className='w-full hidden md:block' src="https://images.pexels.com/photos/14774085/pexels-photo-14774085.jpeg" alt="Ghost COD" />
        <img className='w-full md:hidden' src="https://images.pexels.com/photos/17220675/pexels-photo-17220675.jpeg" alt="" />
    </div>
    <div className='h-auto w-full flex flex-wrap flex-col items-center text-center p-10'>
      <div className='h-auto w-full flex flex-wrap flex-col items-center text-center'>
        <p className='text-orange-600 text-2xl font-bold md:text-4xl'>Lorem ipsum dolor sit, amet consectetur</p>
        <div className='w-36 h-1 border-b-4 border-orange-300 mt-2 mb-2 rounded-2xl md:mt-4'></div>
      </div>
      <div className='w-full h-auto flex flex-wrap justify-evenly mt-12'>
          {user.map((user) => (
            <Card key={user.id} user={user} />
          ))}
      </div>
      <p className='text-orange-950 p-2 rounded-xl mt-2 border-b-2 border-orange-300 bg-orange-500 font-bold '><Link to="/about">More Users</Link></p>
      <div className='w-36 h-1 border-b-4 border-orange-300 mt-4 mb-2 rounded-2xl md:mt-4'></div>
    </div>
    </>
  )
}

export default Home