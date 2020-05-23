import React from 'react'
import { IOffer } from 'balanced-jobs-model';
import { CircularProgress, Typography } from '@material-ui/core';
import OfferForm from './OfferForm';
import './Offer.css';

interface IOfferProps {
  loading?: boolean;
  offer: IOffer | null;
  handleChangeDebounced: (offer: IOffer) => void;
}

const Offer = (props: IOfferProps) => {
  const { offer, loading, handleChangeDebounced } = props;
  if (loading) return <CircularProgress />;
  if (offer === null) return <Typography className="offer-message" variant={'subtitle2'}>No offer</Typography>;
  return (
    <div  className="offer-message">
      {offer && <OfferForm offer={offer} handleChangeDebounced={handleChangeDebounced} />}
    </div>
  )
}

export default Offer
