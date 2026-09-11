import { Compass, GlobeCheck, LogIn, Map, Sparkle } from 'lucide-react'
import React from 'react'
import CustomButton from '../common/CustomButton'
import { useNavigate } from 'react-router-dom'
 
const featuresData = [
  {
  title: "24*7 Availability",
  content: "Our website works 24*7 without any interruption. We guarentee 100% uptime.",
  icon: GlobeCheck,  
  },
  {
    title: "Plan Less. Explore More.",
    content: "Let WanderWise take care of the details while you focus on the journey.",
    icon: Map
  },
  {
    title: "Personalized Adventures",
    content: "Get travel recommendations and itineraries tailored to your interests, budget, and travel style.",
    icon: Sparkle
  },
  {
    title: "Discover Hidden Gems",
    content: "Find unique destinations, local experiences, and memorable places beyond the usual tourist spots.",
    icon: Compass
  },
]

const Features = () => {

  const navigate = useNavigate();
  return (
    <div className='px-20 py-24'>
        {/* heading */}
        <div>
            <h2 onClick={()=>{navigate("/features")}}className='text-4xl font-bold text-center'>Features</h2>
        </div>
        {/* content */}
        <div className='grid grid-cols-1 md:grid-cols-2 md:bg-red-100 lg:grid-cols-4 gap-6 mt-20'>
            {
              featuresData.map((feature, index)=>{ 
                return (
                  <div  className='border rounded p-4 border-gray-300 bg-blue-100'>

                    <feature.icon size={30} className='text-blue-300' />


                    <h3 className='text-2xl font-bold mb-4 '>{feature.title}</h3>
                                
                    <p className='text-xl'>{feature.content}</p>
                  </div>

                

                )
              })
            }


        </div>
    </div>
  )
}


export default Features