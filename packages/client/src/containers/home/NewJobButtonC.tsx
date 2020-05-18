import React, { useCallback, useState } from "react";
import NewJobButton from "../../components/home/NewJobButton";
import { useDispatch } from "react-redux";
import { addNotification } from "../../redux/actions.notification";
import { API_VERSION } from "../../redux/constants";
import { IOffer } from "balanced-jobs-model";
import { useHistory } from "react-router-dom";

export const NewJobButtonC = () => {
  const [creating, setCreating] = useState(false);
  const dispatch = useDispatch();
  const history = useHistory();

  const handleButtonClick = useCallback(async () => {
    if (creating) return;
    setCreating(true);
    const resp: Response = await fetch(`${API_VERSION}/new-offer`);
    if (resp.ok) {
      const offer: IOffer = await resp.json();
      history.push(`offer/${offer._id}`);
    } else {
      dispatch(addNotification("Error creating Job Offer"));
    }
    setCreating(false);
  }, [creating, history, dispatch]);

  return (
    <NewJobButton creating={creating} handleButtonClick={handleButtonClick} />
  );
};
