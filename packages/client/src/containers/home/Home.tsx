import React, { Component } from "react";
import "./Home.css";
import ScatterJobs from "../../components/graphs/ScatterJobs";
import SpiderJobs from "../../components/graphs/SpiderJobs";
import { NewJobButtonC } from "./NewJobButtonC";
import InitialHeader from "../../components/headerBar/InitialHeader";

export default class Home extends Component {
 
  render() {
   
    return (
      <>
        <InitialHeader handleLogout={() => {}} />
        <div className="new-job">
          <NewJobButtonC />
        </div>
        <div className="offers-graph">
          <div className="offers-graph1">
            <ScatterJobs />
          </div>
          <SpiderJobs/>
        </div>
      </>
    );
  }
}
