import React, { Component } from 'react'
import Button from "@material-ui/core/Button";


export default class NewJobButton extends Component {
  callNewJob = () => {
    
  }
  render() {
    return (
      <div>
         <Button variant="contained" color="primary" onClick={
            this.callNewJob
          }>
            New Job
          </Button>
      </div>
    )
  }
}
