import React from "react";
import SideNav from "react-simple-sidenav";
import SidenavItems from "./sidenav_items";

const Nav = props => {
 return (
  <SideNav
   onHideNav={props.onHideNav}
   showNav={props.showNav}
   navStyle={{
    background: "#242424",
    maxWidth: "220px"
   }}
  >
   <SidenavItems />
  </SideNav>
 );
};

export default Nav;
