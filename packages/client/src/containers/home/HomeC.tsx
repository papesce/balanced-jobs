import React from "react";
import "./HomeC.css";

import { NewJobButtonC } from "./NewJobButtonC";
import InitialHeader from "../../components/headerBar/InitialHeader";
import { API_VERSION } from "../../redux/constants";
import { IOffer, IDeleteOfferResponse } from "balanced-jobs-model";
import Home from "../../components/home/Home";
import { useHistory } from "react-router-dom";

const HomeC = () => {
  const [offers, setOffers] = React.useState<IOffer[]>([]);
  const history = useHistory();
  React.useEffect(() => {
    const fetchOffers = async () => {
      const resp: Response = await fetch(`${API_VERSION}/offers`);
      if (resp.ok) {
        const offers: IOffer[] = await resp.json();
        setOffers(offers);
      }
    };
    fetchOffers();
  }, []);
  const editOffer = (offerId: string) => {
    history.push(`/offer/${offerId}`);
  };
  const deleteOffer = async (offerId: string) => {
    const resp: Response = await fetch(`${API_VERSION}/offer/${offerId}`, {
      method: 'DELETE'
    });
    if (resp.ok) {
      const response: IDeleteOfferResponse = await resp.json();
      setOffers(response.offers);
    }
  };
  return (
    <>
      <InitialHeader handleLogout={() => {}} />
      <div className="new-job">
        <NewJobButtonC />
      </div>
      <Home
        offers={offers}
        editOffer={editOffer}
        deleteOffer={deleteOffer}
      ></Home>
    </>
  );
};

export default HomeC;
