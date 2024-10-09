import React from 'react'

const Title = (props) => {
  return (
    <>
    <h1 className= " mx-auto my-0 w-[23rem] text-center   text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight ">{props.label}</h1>
    <div className="mt-2 h-1 w-20 bg-black mx-auto mb-5"></div>
    </>
  )
}

export default Title
