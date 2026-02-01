import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Card from './Components/Cards';

function About() {
  const [user, setUser] = useState([]);
  useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://jsonplaceholder.typicode.com/users');
                setUser(response.data.slice(0,8));
            } catch (error) {
                console.log('Error fetching data:', error);
            }
        };
        fetchData();
    }, []);
  return (
    <>
    <div className='w-full h-auto flex flex-wrap justify-evenly mt-12'>
              {user.map((user) => (
                <Card key={user.id} user={user} />
              ))}
          </div>
    </>
  )
}

export default About