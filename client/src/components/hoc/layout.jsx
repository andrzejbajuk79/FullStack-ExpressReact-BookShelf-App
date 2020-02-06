import React from 'react'
import Header from './../header/header';

const Layout = (props) => {
 return (
  <div>
  <Header />
   <div>
    {props.children}
   </div>
  </div>
 )
}
export default Layout;
