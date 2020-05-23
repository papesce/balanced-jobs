import React from 'react';
import InitialHeader from '../../components/headerBar/InitialHeader';
import Offer from '../../components/offer/Offer';
import { useParams } from 'react-router-dom';
import { IOffer, IOfferResponse } from 'balanced-jobs-model';
import { API_VERSION } from '../../redux/constants';
import { useDispatch } from 'react-redux';
import { addNotification } from '../../redux/actions.notification';


const OfferC = () => {
    const { offerId } = useParams();
    const dispatch = useDispatch();
    const [ loading, setLoading] = React.useState<boolean>(true);
    const [ saving, setSaving] = React.useState<boolean>(false);
    const [ offer, setOffer ] = React.useState<IOffer | null>(null);
    React.useEffect(() => {
      const fetchOffer = async () => {
        try {
          const resp: Response = await fetch(`${API_VERSION}/offer/${offerId}`);
          if (resp.ok) {
            const response: IOfferResponse = await resp.json();
            setOffer(response.offer);
          } 
        } catch (error) {
            dispatch(addNotification("Error loading offer"));
        }  
        setLoading(false);
      };
      fetchOffer();
    }, [offerId, dispatch]);

    const handleOfferChange = async (offer: IOffer) => {
      setSaving(true);
      try {
        // await fetch(`${API_VERSION}/offer/${offerId}`, {method: 'PUT'} );
        setTimeout(() => {
          setSaving(false);
        }, 2000)
      } catch (error) {
        dispatch(addNotification("Error saving  offer"));
      }
      
    }
    return (<>
        <InitialHeader handleLogout={() => {}} />
        {saving && <>saving...</>}
        <Offer loading={loading} offer={offer} handleChangeDebounced={handleOfferChange}/>
    </>)
} 


export default OfferC;