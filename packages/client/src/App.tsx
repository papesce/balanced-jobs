import React from "react";
import NewOffer from './containers/NewOffer'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import NoMatch from "./components/NoMatch";
import Home from "./containers/home/Home";

// const useStyles = makeStyles((theme) => ({
//   root: {
//     flexGrow: 1,
//   },
//   menuButton: {
//     marginRight: theme.spacing(2),
//   },
//   title: {
//     flexGrow: 1,
//   },
// }));

function App() {
  // const classes = useStyles();
  return (
    <Router>
      <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route exact path="/jobs/new-offer">
            <NewOffer />
          </Route>
          <Route path="*">
            <NoMatch />
          </Route>
        </Switch>
    </Router>
  );
}

export default App;
