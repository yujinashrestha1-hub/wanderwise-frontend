import { Compass, GlobeCheck, LogIn, Map, Sparkle } from 'lucide-react'
import React from 'react'
import CustomButton from '../common/CustomButton'
import { useNavigate } from 'react-router-dom'
 
const tripsData = [
  {
  title: "Kathmandu",
  content: "Kathmandu is the capital and largest city of Nepal, situated in the central part of the country within the Kathmandu Valley.",
  image: "https://www.tusktravel.com/blog/wp-content/uploads/2019/08/Swayambhunath-Stupa-Nepal.jpg"

  },
  {
    title: "Ghandruk",
    content: "Ghandruk is a picturesque traditional village nestled in the Annapurna Rural Municipality, Kaski District of the Gandaki Province of Nepal.",
    image : "https://bethere.fun/wp-content/uploads/2025/11/Ghandruk-Village-The-Gurung-Cultural-Gem-of-the-Annapurna-Region-3.webp"

  },
  {
    title: "Annapurna Base Camp",
    content: "The Annapurna Base Camp (ABC) trek in Nepal is a bucket-list adventure for hikers seeking breathtaking mountain vistas, cultural immersion, and a challenging yet rewarding journey.",
    image : "https://www.safeholidayadventure.com/wp-content/uploads/2023/07/Annapurna-base-camp-in-winter.png"
  },
  {
    title: "Pokhara",
    content: "Pokhara is written in Nepali as पोखरा. It is a popular tourist city in Nepal, famously known as the city of lakes and the capital of Gandaki Province.",
    image : "https://tourpokhara.com/wp-content/uploads/2023/09/Kathmandu-Pokhara-Tour.jpg"

  },
]

const FamousTrips = () => {

  const navigate = useNavigate();
  return (
    <div className='px-20 py-24'>
        {/* heading */}
        <div>
            <h2 onClick={()=>{navigate("/features")}}className='text-4xl font-bold text-center'>Famous Trips</h2>
        </div>
        {/* content */}
        <div className='grid grid-cols-1 bg-red-50 md:grid-cols-2 bg-pink-300 lg:grid-cols-4 gap-6 bg-blue-200 mt-20'>
            {
              tripsData.map((feature, index)=>{ 
                return (
                  <div  className='border rounded p-4 border-gray-300 bg-blue-100'>

                   <div className='w-full h-40 overflow-hidden'>
                    <img className='w-full' src={feature.image} alt={feature.tittle} />
                   </div>


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


export default FamousTrips