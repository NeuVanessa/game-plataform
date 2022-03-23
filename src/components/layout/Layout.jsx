import React from "react";
import Routes from "../../routes";
import Sidebar from "../design-system/Sidebar";
import Nav from "../layout/Navbar";

function Layout(props) {
  return (
    <div>
      <div style={{ display: "flex" }}>
        <Sidebar />
        <div>
          <Nav />
          <Routes />
        </div>
      </div>
    </div>
  );
}

export default Layout;
