import React from 'react';
import Header from "./components/Header";

// import "./Reset.css";
import './App.css';

function App() {


  return (
    <div className="App">
      <Header />

      <section className="cover-photo-box"
     >
        <div className="message-box"> 
          <span className="welcome">Welcome To Our Studio!</span>
          <span className="greeting">IT'S NICE TO MEET YOU</span>
          <button className="more-button">TELL ME MORE</button>
        </div>
      </section>

      <section className="services-box">
        <div>
      <h3>SERVICES</h3>
          <p className="services-description" >Lorem ipsum dolor sit amet consectetur.</p>
          <div className="services-container">
            <div>
            <img src="https://www.iconsdb.com/icons/download/orange/cart-19-512.gif"/>
            <h3>E-Commerce</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>
          </div>
          <div>
            <img className="laptop-icon" src="https://p1.hiclipart.com/preview/612/119/656/notebook-cartoon-laptop-hard-drives-wd-blue-desktop-hdd-computer-hardware-desktop-computers-yellow-orange-png-clipart.jpg"/>
            <h3>Responsive Design</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>
          </div>
          <div>
          <img  src="https://www.freeiconspng.com/uploads/lock-icon-26.png"/>
            <h3>Web Security</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>
          </div>
        </div>
        </div>
      </section>

      <section className="portfolio-box">
      PORTFOLIO
      </section>

      <section className="about-box">
      ABOUT
      </section>

      <section className="team-box">
      OUR AMAZING TEAM
      </section>

      <section className="supporters-box">
        <img />
        <img />
        <img />
        <img />
      </section>

      <section className="contact-box">
      CONTACT US
      </section>

      <footer></footer>
    </div>
  );
}

export default App;
