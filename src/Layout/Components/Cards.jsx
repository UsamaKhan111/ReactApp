
function Cards({user}) {
    const {name, company, username, email, website} = user;

  return (
    <div className='w-60 h-75 rounded-2xl border-2 border-orange-500 p-6 flex flex-col items-center mb-12 mx-4 '>
          <p className='text-orange-300 text-4xl font-bold mt-2 text-center'>{name}</p>
          <p className="text-white mt-2">{username}</p>
          <p className="text-slate-400 " >{email}</p>
          <a href="https://jsonplaceholder.typicode.com/" className="text-orange-300">{website}</a>
          <p className='text-slate-400 mt-2 text-center'>{company.catchPhrase}</p>
    </div>
  )
}

export default Cards