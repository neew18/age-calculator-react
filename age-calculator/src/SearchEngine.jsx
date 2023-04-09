import React from 'react'
import Input from './Input'

const labels = ["day","month","year"]
function SearchEngine() {
  return (
    <div className='SearchEngine'>
        <form>
            <div className=' flex justify-between'>
                {labels.map((label)=>{
                    return <Input label={label}/>
                })}
            </div>
        </form>
    </div>
  )
}

export default SearchEngine