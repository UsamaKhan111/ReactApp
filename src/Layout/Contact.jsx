import axios from 'axios';
import { useEffect, useState } from 'react'

function Contact() {
    const [data, setData] = useState();
    useEffect(() => {
        //  fetch('https://api.github.com/users/UsamaKhan111').then(response => response.json()).then((data) => setData(data));
        axios.get('https://api.github.com/users/UsamaKhan111').then((response) => setData(response.data));
    }, [])
    
    return (
        <>
            <div className='w-full h-auto flex flex-wrap justify-evenly mt-12'>
                <div className='w-60 h-80  p-6 flex flex-col items-center mb-12 mx-4' >
                    <img src={data?.avatar_url} alt="Github pfp" className='w-44 h-44 rounded-full  border-2' />
                    <a href="https://github.com/UsamaKhan111" className='text-orange-300 text-4xl font-bold mt-2'>Github</a>
                    <p className='text-slate-400 mt-2'>{data?.bio}</p>
                </div>
                
            </div>
        </>
    )
}

export default Contact