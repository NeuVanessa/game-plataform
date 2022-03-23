import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
// import Page1 from "./pages/Page-1";
// import Page2 from "./pages/Page-2";
// import Page3 from "./pages/Page-3";
// import Dashboard from "./pages/Dashboard";
// import NotFound from "./pages/NotFound";
import Library from "../components/layout/Library";

function Routes() {
  return (
    <BrowserRouter>
      <Route
        render={(props) => (
          //Layout and sidebar can now receive props
          <Layout {...props}>
            <Switch>
              <Route path="/" exact component={Dashboard} />
              <Route path="/library" component={Library} />
            </Switch>
          </Layout>
        )}
      />
    </BrowserRouter>
  );
}

export default Routes;
