import React, { Component } from "react";
import "./Home.css";
import ScatterJobs from "../components/graphs/ScatterJobs";
import SpiderJobs from "../components/graphs/SpiderJobs";
import NewJobButton from "../components/home/NewJobButton";

export default class Home extends Component {
 
  render() {
   
    return (
      <div>
        <div className="new-job">
          <NewJobButton/>
        </div>
        <div className="offers-graph">
          <div className="offers-graph1">
            <ScatterJobs />
          </div>
          <SpiderJobs/>
        </div>
      </div>
    );
  }
}
