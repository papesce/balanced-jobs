import React from "react";
// import Paper from '@material-ui/core/Paper';
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import JobCardMenu from "./JobCardMenu";
import "./JobCardGrid.css";

const JobCardGrid = () => {
  return (
    <div>
      <Grid container>
        <Grid item xs={11}>
          <Typography
            className="jobcardgrid-title"
            color="textSecondary"
            gutterBottom
          >
            Full Stack Software Engineer
          </Typography>
          <Typography variant="body2" component="p">
            This impressive paella is a perfect party dish and a fun meal to
            cook together with your guests. Add 1 cup of frozen peas along with
            the mussels, if you like.
          </Typography>
        </Grid>
        <Grid item>
          <JobCardMenu />
        </Grid>
      </Grid>
    </div>
  );
};

export default JobCardGrid;
