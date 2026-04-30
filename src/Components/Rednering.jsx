import React, { useState } from 'react'

const Rendering = () => {

  const [obj,setObj] = useState({name:"React",subject:"Node"})
  const [toggle,setToggle] = useState(false)

  const [showData,setShowData] = useState(false)

  const [nullish , setNullish] = useState()

const ClickToChange = ()=>{

    setObj({...obj, name:"Js"})

}


const handleClick = ()=>{
    setToggle(!toggle)
}


const change = ()=>{
    setShowData(!showData)
}

const NullishNew = ()=>{
    setNullish(3)
}

  return (
    <>
    <div className='bg-blue-500 text-white p-10'>
        <div className='bg-black flex justify-between p-10 rounded '>
            <div className='bg-amber-300 flex flex-col gap-2 p-2 rounded text-black'>
                Rendering Methods
            <div className='text-black'>
                <ol>
                    <li>{obj.name}</li>
                    <li>{obj.subject}</li>
                </ol>
                 <button className='bg-white rounded p-1 text-black w-20' onClick={ClickToChange}>{toggle?"ADD":"EDIT"}</button>
            </div>
            

            </div>
            <div>
                <h1 className='mb-3'>Ternary Operator</h1>
                <div>
                    <button onClick={handleClick} className='bg-white mb-3 rounded text-black p-2 w-40'>{toggle?"Click to Close":"Click to View"}</button>
                     {toggle? <div className='bg-white p-3 rounded text-black'>
                        <p>React lets you build user interfaces out of individual
                             pieces called components.</p>
                    </div>:<div className='bg-amber-400 p-3 rounded text-black'>
                        <p>React lets you build user interfaces out of individual
                             pieces called components.</p>
                    </div>}
                   
                </div>
            </div>
            <div><h1 className='mb-3'>Optional Rendering</h1>
                <div>
                    <button onClick={change} className='bg-white mb-3 rounded text-black p-2 w-40'>{toggle?"Click to Close":"Click to View"}</button>
                     {showData && <div className='bg-white p-3 rounded text-black'>
                        <p>React lets you build user interfaces out of individual
                             pieces called components.</p>
                    </div>}
                   
                </div></div>
            <div>
                <h1>Nullish value</h1>

                <div>
                    <button onClick={NullishNew} className='bg-white mb-3 rounded text-black p-2 w-40'>{toggle?"Click to Close":"Click to View"}</button>
                    {nullish ?? <div>
                        {"This is Nullish"}
                        </div>}
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Rendering