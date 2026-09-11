import React, { useEffect, useState } from 'react'
import { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../../components/ui/card'
import { Button } from '../../components/ui/button'
import { EllipsisVertical, Plus } from 'lucide-react'
import api from '../../api/axios'
import { toast } from 'sonner'
import { formatDate } from '../../lib/utils'

const Trip = () => {

const [trips, setTrips] = useState([]);

useEffect(()=>{
  const fetchTrips = async ()=>{
   try{
    const response = await api.get("/trips");
    setTrips(response.data);
   }catch(error){
    toast.error("Some error occured while fetching trips.");
    console.log(error);
   }
  }

  fetchTrips(); 
}, [])

  return (
    <div className='px-20 py-24'>
      <Card>
        <CardHeader className={""}>
          <CardTitle>See your trips</CardTitle>
          <CardDescription>View and manage all your trips</CardDescription>
          <CardAction>
           <a href="/trips/add"><Button><Plus /> Add Trip</Button></a>
          </CardAction>
        </CardHeader>

        <CardContent>
          <div className='grid grid-cols-3 gap-6'>

            {
              trips.length == 0 
              ?
              <div className='test-3xl font-semibold text-center py-20'>You do not have any trips to show. Create a new trip first.</div>
              :
              trips.map((trip)=>{
                return (

                   <Card key={trip._id}>
              <CardHeader className={"border-b"}>
                <CardTitle>{trip.title}</CardTitle>
                <CardDescription>{formatDate(trip.startDate)} - {formatDate(trip.endDate)}</CardDescription>
                <CardAction>
                <EllipsisVertical />
                </CardAction>
              </CardHeader>
              <CardContent>
                <p>Budget: Rs. {trip.budget.total}</p>
                <p>Spent: Rs. {trip.budget.spent}</p>
              </CardContent>
              <CardFooter>
                <p>Destinations: {trip.destinations.join(", ")}</p>
              </CardFooter>
            </Card>

                )
              })
            }
            
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default Trip