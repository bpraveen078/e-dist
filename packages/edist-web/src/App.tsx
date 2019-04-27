import * as React from "react";
import { CSVLink } from "react-csv";
import { makeAppContext } from "../src/props/makeAppContext";
import { IPropsContextModel, PropsContext } from "../src/props/propsContext";
import "./App.css";
import logo from "./logo.svg";

class App extends React.Component {
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
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
          </header>
          <p className="App-intro">
            <CSVLink data={csvData}>Download me</CSVLink>
            <code>src/App.tsx</code> and save to reload.
          </p>
        </PropsContext.Provider>
      </div>
    );
  }
}

export default App;
