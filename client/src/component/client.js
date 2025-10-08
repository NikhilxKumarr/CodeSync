import React from 'react'
import Avatar from 'react-avatar'

function client (username)  {
  return (
    <div  className="d-flex align-items-center mb-3 ">
        <Avatar name={username} round={true} size="40" className="me-2"/>
        <span className="text-light">{username}</span>
      
    </div>
  )
}

export default client
