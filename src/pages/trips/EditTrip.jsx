import React, { useEffect, useState } from 'react'
import TripForm from '../../components/common/TripForm'
import api from '../../api/axios';
import { toast } from 'sonner';
import { useParams } from 'react-router-dom';

const EditTrip = () => {

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
    <div>
      <TripForm 
        tripDetails={{ 
          ...trip, 
          startDate: trip.startDate.split('T')[0], 
          endDate: trip.endDate.split('T')[0] 
        }}
      />
    </div>
  )
}

export default EditTrip