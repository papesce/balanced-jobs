import React, { Component } from 'react'
import Button from '@material-ui/core/Button';
import './Home.css';

export default class Home extends Component {
    render() {
        return (
            <div>
                <div className="new-job">
                    <Button  variant="contained" color="primary">
                    New Job
                    </Button>
                </div>
                <div className="offers-graph">
                    Offers Graph
                </div>
            
            </div>
        )
    }
}
