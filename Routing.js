import React from "react";
import {
  HashRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  Redirect,
} from "react-router-dom";

export default function Routing() {
  const login = () => {
    return <div> Login Component</div>;
  };

  const register = () => {
    return <div> Register component Component</div>;
  };
  const Users = () => {
    //<Redirect to="/dashboard/users?isAdmin=true" />;
    return <div>Users comp</div>;
  };
  const User = () => {
    let { id } = useParams();
    return <div>Now showing Use details {id}</div>;
  };

  const Dashboard = () => {
    return (
      <div>
        <Switch>
          <Route exact path="/dashboard/Users" component={Users} />
          <Route path="/dashboard/use:id" component={User} />
        </Switch>
        dashboard
      </div>
    );
  };

  return (
    <Router>
      <Switch>
        <Route path="/login" component={login} />
        <Route path="/register" component={register} />
        <Route path="/dashBoard" component={Dashboard} />
      </Switch>
    </Router>
  );
}
