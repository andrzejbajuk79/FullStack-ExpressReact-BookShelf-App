import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome'
import { Link } from 'react-router-dom';
import SideNav from './side-nav/sideNav';


class Header extends Component {
 state = {
  showNav: false
 }
onHideNav =()=>{
  this.setState({showNav:false})
 }

 render() {
  return (
   <header>
    <div className='open_nav'>
     <FontAwesome name='bars'
     onClick={()=>this.setState({showNav:true})}
      style={{
       color: '#ffffff',
       padding: '10px',
       cursor: 'pointer'
      }}
     />
    </div>
    <SideNav
     showNav={this.state.showNav}
     onHideNav={()=>this.onHideNav()}
    >
    </SideNav>
    <Link to='/' className='logo'>BookShelf</Link>

   </header>
  )
 }
}

export default Header;
