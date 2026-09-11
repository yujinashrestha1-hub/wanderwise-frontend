import React from 'react'
import Navbar from '../components/common/Navbar'
import { Button } from '../components/ui/button'
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"


const Contact = () => {
  return (
    <div>

        <Navbar />

        <Button>Click Me</Button>
        <Button variant='destructive'>Click Me</Button>

        <HoverCard>
          <HoverCardTrigger>Hover</HoverCardTrigger>
          <HoverCardContent>
    The React Framework – created and maintained by @vercel.
          <img src=' /heroImage.jpg' alt='dfdfd' />
          </HoverCardContent>
</HoverCard>

<Card className='w-80' >
  <CardHeader>
    <CardTitle>Trips Details</CardTitle>
    <CardDescription>Create new trip</CardDescription>
    <CardAction>Info</CardAction>
  </CardHeader>
  <CardContent>
    <p>
      <img src='/heroImage.jpg' />
       <p className='text-center font-semibold mt-4 '>Pokhara

    </p>
    <p className=''>
      Pokhara is a beautiful city in Nepal, famous for Phewa Lake, Himalayan views, and adventure activities like trekking and paragliding.
    </p>
    
    </p>
  </CardContent>
  <CardFooter className='flex justify-center'>
    <Button className='w-30 bg-blue-400'>Book Now</Button>
  </CardFooter>
</Card>

    </div>
  )
}

export default Contact