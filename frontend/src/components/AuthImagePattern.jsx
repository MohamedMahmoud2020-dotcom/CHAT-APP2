import React from 'react'

const AuthImagePattern = ({title, subtitle}) => {
  return (
    <div className='flex justify-center items-center bg-base-200 p-12'>
        <div className='text-center'>
            <div className='grid grid-cols-3 gap-3'>
            {[...Array(9)].map((_, i) => (
            <div
              key={i}
              className={`aspect-square rounded-2xl bg-primary/10 ${
                i % 2 === 0 ? "animate-pulse" : ""
              }`}
            />
          ))}
            </div>
            <h3>{title}</h3>
            <p>{subtitle}</p>
        </div>
    </div>
  )
}

export default AuthImagePattern