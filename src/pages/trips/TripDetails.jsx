import React, { useState } from 'react'
import { Card, CardDescription, CardHeader, CardTitle } from '../../components/ui/card'
import ExpenseForm from '../../components/common/ExpenseForm'
import api from '../../api/axios';
import { toast } from 'sonner';
import { useParams } from 'react-router-dom';
import TripInfo from '../../components/common/TripInfo';
import InviteForm from '../../components/common/InviteForm';

const TripDetails = () => {

   const { id } = useParams();

  const [trip, setTrip] = useState(null);

  useEffect(() => {

    const fetchTrips = async () => {
      try {
        const response = await api.get(`/trips/${id}`);
        setTrip(response.data);
      } catch (error) {
        toast.error("Some error occured while fetching trips");
        console.log(error);
      }
    }

    fetchTrips();
  }, []);

  if (!trip) {
    return <div>loading</div>
  }

  return (
    <div className='px-20 py-24 flex gap-6 '>

      <Card className={"w-3/4"}>
      <TripInfo trip={trip} />


      </Card>

      <div className='w-1/4'>
     <ExpenseForm trip={trip} />
     <InviteForm trip={trip} />
      </div>
     
    </div>
  )
}

export default TripDetails