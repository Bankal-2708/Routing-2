import React from 'react'
import { useParams } from 'react-router-dom'

function Userdetail() {
    const params=useParams()
    const userid=params.userid

  return (
    <div>
        <div>showa user detail {userid}</div>
        
    </div>
  )
}

export default Userdetail