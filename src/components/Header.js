import React from "react";
import Scroll from "./Scroll"
import "./Header.css"


class Header extends React.Component{
  constructor(){
    super()
    this.state = {
      toggleDropdown: false,
      mobile: true
    }
  }

scrollHandler = (value) => {
  if (value <  200 && window.innerWidth > 1000){
    document.getElementById("navbar").style.backgroundColor = "transparent";
    document.getElementById("navbar").style.height = "100px";
  } else {
    document.getElementById("navbar").style.backgroundColor = "rgb(21, 37, 51)";
    document.getElementById("navbar").style.height = "60px";
  }
  }


  render(){
    return(
      <div>
      <header id="navbar">
            <style>
            @import url('https://fonts.googleapis.com/css?family=Kaushan+Script&display=swap');
            </style>
        <div className="logo">Start Bootstrap 
        </div>

        <Scroll scrollHandler={this.scrollHandler} />

        {this.state.toggleDropdown
        ? (
          <>
        <button className="dropdown-toggle" onClick={()=> this.setState({toggleDropdown: !this.state.toggleDropdown})}> MENU ≡ </button>

        <nav className="dropdown-menu">
          <span onClick={()=> {
             this.setState({scrollY: 500})
           } }>SERVICES</span>
          <span>PORTFOLIO</span>
          <span>ABOUT</span>
          <span>TEAM</span>
          <span>CONTACT</span>
        </nav>
        </>
        )
        : (
          <>
        <button className="dropdown-toggle" onClick={()=> this.setState({toggleDropdown: !this.state.toggleDropdown})}> MENU ≡ </button>
        <nav className="nav-box">

          <span onClick={()=> this.setState({scrollY: 500})}>SERVICES</span>
          <span>PORTFOLIO</span>
          <span>ABOUT</span>
          <span>TEAM</span>
          <span>CONTACT</span>
        </nav>
        </>
        )}
      </header>
      </div>
      )
  }
}

export default Header;