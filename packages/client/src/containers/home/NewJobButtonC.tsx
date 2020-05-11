import React, { useCallback, useState } from 'react';
import NewJobButton from '../../components/home/NewJobButton';
import { useDispatch } from 'react-redux';
import { addNotification } from '../../redux/actions.notification';


export const NewJobButtonC = () => {
  const [creating, setCreating] = useState(false);
  const dispatch = useDispatch();
  
  const handleButtonClick = useCallback( async () => {
    if (creating) return
    setCreating(true)
    dispatch(addNotification('Error creating Job Offer'))
    const resp = await fetch('/api/v1/newOffer');
    console.log(resp);
    setCreating(false)
  }, [creating, dispatch]) // update the callback if the state changes


  return (
    <NewJobButton creating={creating} handleButtonClick={handleButtonClick}/>
  )
}