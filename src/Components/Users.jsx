import React from 'react'
import { useSearchParams } from 'react-router-dom'

function Users() {
    const [searchParams, setSearchParams]=useSearchParams()
    const activeUsers=searchParams.get('filter')==='active'
  return (
    <div>
        <h1>User 1</h1>
        <h1>User 2</h1>
        <h1>User 3</h1>
        <div className='flex  gap-6 ' >
            <button className='bg-gray-300 px-3 py-1 rounded-md border' onClick={()=>setSearchParams({filter:'active'})}>Active user</button>
            <button className='bg-gray-300 px-3 py-1 rounded-md border' onClick={()=>setSearchParams()}>Reset filter</button>
        </div>
        {
            activeUsers ? <h1>Showing active users</h1> : <h1>Showing all users</h1>
        }
    </div>
  )
}

export default Users