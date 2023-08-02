import React from "react";
import "./Layout.styles.css";

function Layout({ children }) {
  return <main className="layout">{children}</main>;
}

export default Layout;
