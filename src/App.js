import React from "react";
import "./App.scss";
import { HashRouter as Router } from "react-router-dom";
import { connect } from "react-redux";
import Main from "./components/Main/Main";

function App(props) {
  return (
    <Router>
      <div className="App">
        <Main />
      </div>
    </Router>
  );
}
const mapStateToProps = state => {
  return {
    isSwiper: state.lead
  };
};
export default connect(mapStateToProps)(App);
