import React from 'react'
import { useNavigate } from 'react-router-dom' 

function Home() {

    const navigate=useNavigate();

  return (
    <div>
        <h1>Home Page</h1>
        <button onClick={()=>navigate('order-summary')}
        className='bg-gray-400 px-3 py-1 rounded-md hover:text-orange-300'>Place Order</button>
    </div>
  )
}

export default Home