import React, { Component } from "react";
import "./Home.css";
import ScatterJobs from "../../components/graphs/ScatterJobs";
import SpiderJobs from "../../components/graphs/SpiderJobs";
import { NewJobButtonC } from "./NewJobButtonC";

export default class Home extends Component {
 
  render() {
   
    return (
      <div>
        <div className="new-job">
          <NewJobButtonC />
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
