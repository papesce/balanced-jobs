import React from "react";
import { TextField } from "@material-ui/core";
import "./OfferForm.css";
import { IOffer } from "balanced-jobs-model";

interface IOfferFormProps {
  offer: IOffer;
  handleChangeDebounced: (newOffer: IOffer) => void;
}

const OfferForm = (props: IOfferFormProps) => {
  const { offer, handleChangeDebounced } = props;
  const [ newOffer, setNewOffer] = React.useState<IOffer>(props.offer);

  React.useEffect(() => {
    const timeout = setTimeout(() => {
      if (newOffer !== offer) {
        handleChangeDebounced(newOffer);
      }
    }, 1000);
    return () => {
      clearTimeout(timeout);
    };
  }, [newOffer, handleChangeDebounced, offer]);

  const handleChange = (field: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
    const value: string = event.target.value;
    setNewOffer({...newOffer, [field]: value});
  };
  return (
    <div>
      <div className="new-offer">
        <form noValidate autoComplete="off">
          <TextField
            id="outlined-title"
            className="offer-text-field"
            label="Title"
            // variant="outlined"
            helperText="Enter the title for the Job (like FullStack Developer)"
            value={newOffer.title}
            onChange={handleChange('title')}
            fullWidth
          />
          <TextField
            id="outlined-desc"
            className="offer-text-field"
            label="Short Description"
            // variant="outlined"
            helperText="Enter a short description here for the Job"
            value={newOffer.description}
            onChange={handleChange('description')}
            fullWidth
          />
          <TextField
            id="outlined-multiline-text"
            className="offer-text-field"
            label="Job offer text"
            multiline
            rows={4}
            // variant="outlined"
            helperText="Enter the full text description for the Job"
            value={newOffer.freeText}
            onChange={handleChange('freeText')}
            fullWidth
          />
        </form>
      </div>
    </div>
  );
};

export default OfferForm;
