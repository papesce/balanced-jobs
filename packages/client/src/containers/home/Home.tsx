import React, { Component } from "react";
import "./Home.css";
import ScatterJobs from "../../components/graphs/ScatterJobs";
import SpiderJobs from "../../components/graphs/SpiderJobs";
import { NewJobButtonC } from "./NewJobButtonC";
import InitialHeader from "../../components/headerBar/InitialHeader";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';

export default class Home extends Component {
  render() {
    return (
      <>
        <InitialHeader handleLogout={() => {}} />
        <div className="new-job">
          <NewJobButtonC />
        </div>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Paper className='jobs-graph-paper' elevation={3}>
              <ScatterJobs />
            </Paper>
          </Grid>
          <Grid item xs={6}>
          <Paper className='jobs-graph-paper' elevation={3}>
            <SpiderJobs />
            </Paper>
          </Grid>
          <Grid item xs={12}>
          <Paper className='jobs-table-paper' elevation={3}>
            <List className='jobs-list'>
            <ListItem>
                <ListItemText primary="Job offer 1"></ListItemText>
              </ListItem>
              <Divider  variant="inset" component="li" />
              <ListItem>
                <ListItemText primary="Job offer 2"></ListItemText>
              </ListItem>
            </List>
          </Paper> 
          </Grid>
        </Grid>
      </>
    );
  }
}
