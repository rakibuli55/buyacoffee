import React from 'react'

function ButtonPrimary({fontSize = '16px', text}) {
  return (
    <div className='py-4 px-6 bg-primaryColor rounded-[100px] text-headingColor border border-primaryColor font-semibold duration-200 ease-out hover:bg-transparent' style={{ fontSize }}>
        {text}
    </div>
  )
}

export default ButtonPrimary