import React from 'react'

const Title = ({text1}) => {
  return (
    <div className='inline-flex gap-2 items-center mb-3'>
      <span className='text-4xl sm:text-5xl  font-semibold mb-10'>{text1} </span>
    </div>
  )
}

export default Title
