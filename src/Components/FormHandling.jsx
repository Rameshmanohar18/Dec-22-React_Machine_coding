import React, { useState } from 'react'

const FormHandling = () => {
 
    const [formData,setFormdata] = useState("")
    const [saveData,setSavedata] = useState("")
  const handleChange = (e)=>{

    
    
setFormdata(e.target.value)
    
 
  }

  const handleClick = ()=>{

    
setSavedata(formData)
    

 
  }


  return (
    <div className=' p-10 flex flex-col justify-center items-center'>
        <div>
            <img src="./1.png" width={100} alt="" />
        </div>
        <div className='border rounded border-gray-300 p-5'>
        <h1 className='text-2xl mb-3'>Sign in or create account</h1>
        <h4 className='font-bold'>Enter mobile number or email</h4>
       <div className='flex flex-col gap-3 mb-3'>
         <input onChange={handleChange} className='border border-gray-300 p-1 w-100' type="text"  />
         <h4>{saveData}</h4>
        <button onClick={handleClick} className='bg-yellow-300 p-2 rounded-3xl w-100'>Continue</button>

        
       </div>
        <p className='font-light'>By continuing, you agree <br /> to Amazon's 
        <a href='' target='_black'>Conditions of Use</a> 
        and <a href="" target='_black'>Privacy Notice</a>.</p>
        <h4>Buying for work?</h4>
        <a href="">Create a free business account</a>
        </div>
    </div>
  )
}

export default FormHandling