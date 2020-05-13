import React, { Component } from "react";
import { ToastContainer } from "react-toastify";
import jwtDecode from "jwt-decode";
import "react-toastify/dist/ReactToastify.css";

import { Box } from "@material-ui/core";
import { Alert, AlertTitle } from "@material-ui/lab";

import { TopBar } from "../topBar/TopBar";
import LoginModal from "../auth/LoginModal";
import SignupModal from "../auth/SignupModal";

// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export class App extends Component {
  state = {
    openLoginModal: false,
    openSignupModal: false,
  };

  handleLogin = () => {
    this.setState({ openLoginModal: true });
    this.setState({ openSignupModal: false });
  };

  handleLogout = () => {
    localStorage.removeItem("access_token");
  };

  handleSignup = () => {
    this.setState({ openLoginModal: false });
    this.setState({ openSignupModal: true });
  };

  handleLoginModalClose = () => {
    this.setState({ openLoginModal: false });
  };

  handleSignupModalClose = () => {
    this.setState({ openSignupModal: false });
  };

  verifyToken = () => {
    try {
      const decodedToken = jwtDecode(localStorage.getItem("access_token"));
      if (decodedToken.exp > Date.now() / 1000) {
        localStorage.removeItem("access_token");
      }
    } catch (err) {
      console.log("err :>> ", err);
    }
  };

  componentDidMount() {
    this.verifyToken();
  }

  componentDidUpdate() {
    this.verifyToken();
  }

  render() {
    const { openLoginModal, openSignupModal } = this.state;

    return (
      <div className="App">
        <ToastContainer />

        <TopBar onLogin={this.handleLogin} onLogout={this.handleLogout} />

        <LoginModal
          open={openLoginModal}
          onClickClose={this.handleLoginModalClose}
          onSignup={this.handleSignup}
        />

        <SignupModal
          open={openSignupModal}
          onClickClose={this.handleSignupModalClose}
          onLogin={this.handleLogin}
        />

        <Box mt={10} width="70%" m="Auto">
          <Alert severity="info" variant="filled">
            <AlertTitle>Info</AlertTitle>
            This app still in construction...
          </Alert>
        </Box>
      </div>
    );
  }
}

export default App;
