import React from 'react'
import {useForm} from "react-hook-form"

function SearchEngine() {
  const { register, handleSubmit, watch, formState: { errors } } = useForm({mode:"all"});
  const onSubmit = data => console.log(data);

  console.log(watch()); // watch input value by passing the name of it
  return (
    <div className='SearchEngine'>
        <form onSubmit={handleSubmit((data)=>{
            console.log(data);
        })}> {/*will validate the inputs before invoking "onSubmit" */}
            <div className='flex justify-between'>
                <div>
                    <label className='block text-[#716f6f] font-bold uppercase tracking-widest text-[0.6rem] my-1' >
                        day
                    </label>
                    <input className='border w-24 rounded-md' {...register("day",{ required: "can't be blank" })}/>
                </div>
                <div>
                    <label className='block text-[#716f6f] font-bold uppercase tracking-widest text-[0.6rem] my-1' >
                        month
                    </label>
                    <input className='border w-24 rounded-md' {...register("month",{ required: "can't be blank" })}/>
                </div>
                <div>
                    <label className='block text-[#716f6f] font-bold uppercase tracking-widest text-[0.6rem] my-1' >
                        year
                    </label>
                    <input className='border w-24 rounded-md' {...register("year",{ required: "can't be blank" })} />
                </div>
            </div>
            
            
        </form>
    </div>
  )
}

export default SearchEngine