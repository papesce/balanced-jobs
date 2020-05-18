import React from "react";
import NewOffer from "./containers/NewOffer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NoMatch from "./components/NoMatch";
import Home from "./containers/home/HomeC";
import ErrorMessage from "./components/errors/ErrorMessage";
import { IRootState } from "./redux/configureStore";
import { useSelector, useDispatch } from "react-redux";
import { INotificationState } from "./redux/reducer.notification";
import { clearNotification } from "./redux/actions.notification";

function App() {
  const dispatch = useDispatch();
  const notification: INotificationState = useSelector(
    (state: IRootState) => state.notificationState
  );
  const handleClose = () => {
    dispatch(clearNotification());
  };
  return (
    <>
      <ErrorMessage
        open={notification.enabled}
        message={notification.text}
        handleClose={handleClose}
      />
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/offer/:id">
            <NewOffer />
          </Route>
          <Route path="*">
            <NoMatch />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
