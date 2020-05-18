import React from "react";
import ScatterJobs from "../../components/graphs/ScatterJobs";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import JobList from "../joblist/JobList";
import "./Home.css";
import { IOffer } from "balanced-jobs-model";

interface IHomeProps {
  offers: IOffer[];
}

const Home = (props: IHomeProps) => {
  const { offers } = props;
  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Paper className="jobs-graph-paper" elevation={3}>
            <ScatterJobs />
          </Paper>
        </Grid>
        {/* <Grid item xs={6}>
          <Paper className='jobs-graph-paper' elevation={3}>
            <SpiderJobs />
            </Paper>
          </Grid> */}
        <Grid item xs={12}>
          <Paper className="jobs-table-paper" elevation={3}>
            <JobList
              offers={offers}
              editOffer={() => {}}
              deleteOffer={() => []}
            />
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default Home;
