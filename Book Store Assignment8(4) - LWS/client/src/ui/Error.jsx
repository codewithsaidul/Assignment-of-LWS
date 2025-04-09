import React from 'react'

const Error = ({message}) => {
  return (
    <div>
        <p className='text-xl font-semibold text-red-500'>{message}</p>
    </div>
  )
}

export default Error