import React from 'react'
import CustomButton from '../common/CustomButton'

const Hero = () => {
  return (
    <div className='relative'>
   { /* image*/ }
   <div className='w-full h-[90vh] overflow-hidden flex'>
    <img src='/heroImage.jpg' alt='Wanderwise hero section'className='w-full '/>
   </div>
    {/* overlay */}
    <div className='w-full h-[90vh] bg-black absolute top-0 opacity-40'>

    </div>

    {/* content  */}
    <div className='absolute top-0 w-full h-[90vh] flex items-center justify-center'>
        <div className='w-1/2 mx-auto text-center'>
        <h1 className='text-white text-5xl font-bold'>Plan your trips with Wanderwise</h1>
        <p className='text-white mt-4 text-lg leading-8'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam alias, repellendus optio aspernatur cupiditate velit, expedita, quae placeat inventore voluptates veniam ex eligendi deleniti doloremque unde tempora est. Nostrum, voluptas?
        </p>
        <div className=''>

      <CustomButton text="Get Started" className="mt-4"/>
      <CustomButton text="Learn More" className="mt-4"/>
      </div>

      </div>
        
    </div>
    </div>
  )
}

export default Hero