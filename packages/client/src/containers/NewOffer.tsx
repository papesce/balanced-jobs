import React from 'react';
import InitialHeader from '../components/headerBar/InitialHeader';
import { TextField } from '@material-ui/core';
import './NewOffer.css';

const NewOffer = () => {
    
    return (<>
        <InitialHeader handleLogout={() => {}} />
        <div className='new-offer'>
        <TextField
          id="outlined-multiline-static"
          label="Enter job offer text here..."
          multiline
          rows={4}
          defaultValue=""
          variant="outlined"
        />
        </div>
    </>)
} 


export default NewOffer;