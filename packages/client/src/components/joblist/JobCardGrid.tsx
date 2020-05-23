import React from "react";
// import Paper from '@material-ui/core/Paper';
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import JobCardMenu from "./JobCardMenu";
import "./JobCardGrid.css";
import { IOffer } from "balanced-jobs-model";

interface IJobCardGrid {
  offer: IOffer;
  handleEditJob: (id: string) => void;
  handleDeleteJob: (id: string) => void;
}

const JobCardGrid = (props: IJobCardGrid) => {
  const { handleEditJob, handleDeleteJob } = props;
  const { title, description, _id } = props.offer;
  const [visible, setVisible] = React.useState<boolean>(false);
  return (
    <div onMouseEnter={()=>setVisible(true)} 
      onMouseLeave={() => setVisible(false)}>
      <Grid container>
        <Grid item xs={11}>
          <Typography
            className="jobcardgrid-title"
            color="textSecondary"
            gutterBottom
          >
            {title}
          </Typography>
          <Typography
            className="jobcardgrid-desc"
            variant="body2"
            component="p"
          >
            {description}
          </Typography>
        </Grid>
        <Grid item>
          <JobCardMenu
            id={_id}
            handleEdit={handleEditJob}
            handleDelete={handleDeleteJob}
            visible={visible}
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default JobCardGrid;
