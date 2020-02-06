import React from 'react';
import SideNav from 'react-simple-sidenav';

const Nav = (props) => {
 return (
  <SideNav
  onHideNav={props.onHideNav}
  showNav={props.showNav}
  navStyle={{
   background:'#242424',
   maxWidth:'220px'
  }}
  >
   items
  </SideNav>
 )
}

export default Nav;
