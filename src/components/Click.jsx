import React from 'react'

function Click() {
    const handleClick =()=>{
        alert("Button clicked")
    }
  return (
    <div>
        <button onClick={handleClick}>Click Me</button>
    </div>
  )
}

export default Click