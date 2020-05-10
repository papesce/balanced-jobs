import React, { useEffect, useCallback, useState } from 'react';
import NewJobButton from '../../components/home/NewJobButton';


export const NewJobButtonC = () => {
  const [creating, setCreating] = useState(false);
  const handleButtonClick = useCallback( async () => {
    if (creating) return
    setCreating(true)
    const resp = await fetch('/api/v1/newUser');
    console.log(resp);
    setCreating(false)
  }, [creating]) // update the callback if the state changes
     

  return (
    <NewJobButton creating={creating} handleButtonClick={handleButtonClick}/>
  )
}