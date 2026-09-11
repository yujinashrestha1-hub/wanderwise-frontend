import React from 'react'
import { useNavigate } from 'react-router-dom'

const CustomButton = ({text, className, link}) => {

      const navigate = useNavigate();

  return (
     <button onClick={()=>{navigate(link)}} className={`border px-4 py-2 rounded-2xl hover:bg-blue-300 cursor-pointer
        bg-primary text-white
         bg-blue-400 ${className}`}>{text}</button>
  )
}

export default CustomButton