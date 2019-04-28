import * as React from "react";
import { CSVLink } from "react-csv";
import { makeAppContext } from "../src/props/makeAppContext";
import { PropsContext } from "../src/props/propsContext";
import "./App.css";
// import { PrivateRoute } from "./common/private-route";
import logo from "./logo.svg";
import Login from "./pages/common/login.page";
// @ts-ignore
import { Route, Router } from "react-router";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Drawer from "@material-ui/core/Drawer";

import { createBrowserHistory } from "history";

export const history = createBrowserHistory();
const styles = {
  root: {
    flexGrow: 1
  }
};

class App extends React.Component {
  constructor(props: any) {
    super(props);
  }
  public handleDrawerOpen = () => {
    this.setState({ open: true });
  };

  public handleDrawerClose = () => {
    this.setState({ open: false });
  };
  public render() {
    const csvData = [
      ["firstname", "lastname", "email"],
      ["Ahmed", "Tomi", "ah@smthing.co.com"],
      ["Raed", "Labes", "rl@smthing.co.com"],
      ["Yezzi", "Min l3b", "ymin@cocococo.com"]
    ];
    return (
      <div className="App">
        <PropsContext.Provider value={makeAppContext}>
          <Router history={history}>
            <div>
              <AppBar position="static" color="default">
                <Toolbar>
                  <Typography variant="h6" color="inherit">
                    Photos
                  </Typography>
                </Toolbar>
              </AppBar>
              {/* <ButtonOne disable /> */}
              {/* <TestComponent id={1} /> */}
              <div>
                {/* {loading == true && (
                  <div className="dv-loader">
                    <div className="loader" />
                  </div>
                )} */}
                {/* <PrivateRoute path="/" component={Login} /> */}
                <Route exact={true} path="/" component={Login} />
              </div>
            </div>
          </Router>
        </PropsContext.Provider>
      </div>
    );
  }
}

export default App;
