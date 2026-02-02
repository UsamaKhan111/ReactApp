
import Card from './Components/Cards';
import { Button } from '../components/ui/button';
import { Navigate, useNavigate, useOutletContext } from 'react-router-dom';

function About() {
  const navigate = useNavigate();
  const { users } = useOutletContext();
  
  return (
    <>
      <div className='flex flex-col items-center justify-center'>
        <div className='w-full h-auto flex flex-wrap justify-evenly mt-12'>
          {users.filter(users=>users.username).map((users) => (
            <Card key={users.id} user={users} />
          ))}
        </div>
        <Button variant="outline" size="lg" className="mt-4 bg-orange-400 mb-8 hover:bg-orange-500 cursor-pointer" onClick = {()=>navigate('/adduser')}>Add New User</Button>
      </div>
    </>
  )
}

export default About