import React from 'react'

function Input(props) {
  return (
    <div className='Input'>
        <label className='block text-[#716f6f] font-bold uppercase tracking-widest text-[0.6rem] my-1' htmlFor="Day">
            {props.label}
        </label>
        <input className='border w-24 rounded-md' type="text " />
    </div>
  )
}

export default Input