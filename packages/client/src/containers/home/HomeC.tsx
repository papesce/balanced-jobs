import React from "react";
import "./HomeC.css";

import { NewJobButtonC } from "./NewJobButtonC";
import InitialHeader from "../../components/headerBar/InitialHeader";
import { API_VERSION } from "../../redux/constants";
import { IOffer } from "balanced-jobs-model";
import Home from "../../components/home/Home";


const HomeC = () => {
  const [offers, setOffers] = React.useState<IOffer[]>([]);
  React.useEffect(() => {
    const fetchOffers = async () => {
      const resp: Response = await fetch(`${API_VERSION}/offers`);
       if (resp.ok) {
        const offers: IOffer[] = await resp.json();
         setOffers(offers);
       }
    }
    fetchOffers();
  }, []);

    return (
      <>
        <InitialHeader handleLogout={() => {}} />
        <div className="new-job">
          <NewJobButtonC />
        </div>
       <Home offers={offers}></Home>
      </>
    );


}

export default HomeC;
