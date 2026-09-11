import { Star } from 'lucide-react'
import React from 'react'

const OurMission = () => {
  return (
    <section className='px-80 py-24 bg-emerald-900 text-white'>

        <h2 className="text-4xl font-bold text-center mb-12">Our Mission</h2>

        <p className='text-xl italic text-center font-medium mb-20'>
            Our mission is to make sure all the users <br /> can plan trips with their friends and family. Plan their itinerary, manage their baggage, <br /> and discover new experiences together with wanderwise.
        </p>

        <div className="grid grid-cols-3 gap-10">
            <div className="text-center border-r border-white">
                <p className="text-4xl font-black">300+</p>
                <p className="text-xl mt-2 italic">Clients Served</p>
            </div>
            <div className="text-center">
                <p className="text-4xl font-black flex justify-center items-center gap-2">4.8 <Star size={30} /> </p>
                <p className="text-xl mt-2 italic">Overall Rating</p>
            </div>
            <div className="text-center border-l border-white">
                <p className="text-4xl font-black">20+</p>
                <p className="text-xl mt-2 italic">Countries Linked</p>
            </div>
        </div>
    </section>
  )
}

export default OurMission