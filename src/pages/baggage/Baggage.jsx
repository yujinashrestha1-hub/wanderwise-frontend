import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import api from '../../api/axios';
import { toast } from 'sonner';

const BaggageDetails = () => {

    const { id } = useParams();

    const [baggages, setBaggages] = useState([]);
    const [dependancy, setDependency] = useState(0);

    useEffect( ()=>{
        const fetchBaggages = async ()=>{
            try{
                const response = await api.get(`/${id}/baggages`);
                setBaggages(response.data);
            }catch(error){
                toast.error( error.message || "Error while fetching trips");
            }
        }

        fetchBaggages();
    }, [dependancy] )


  return (
    <div>BaggageDetails</div>
  )
}

export default BaggageDetails