import React from "react";

import { Alert, AlertTitle } from "@material-ui/lab";

const HomePage = () => {
  return (
    <div>
      <h1>Home Page</h1>

      <Alert severity="info" variant="filled">
        <AlertTitle>Info</AlertTitle>
        This app still in construction...
      </Alert>
    </div>
  );
};

export default HomePage;
