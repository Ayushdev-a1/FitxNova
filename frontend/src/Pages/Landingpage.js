import React from "react";
import Navbar from "../Components/Navbar";


const LandingPage = () => {
  return (
    <div className="container">
      <Navbar/>
      <div className="content">
        <h1 className="title">
          Welcome to <span className="highlight">FitxNova</span>
        </h1>
        <p className="description">
          At FitxNova, we’re redefining fashion with a promise to deliver premium quality, flawless stitching, and stylish designs at prices that won’t break the bank. Our mission is to provide you with the best-quality products that go beyond what’s currently available online.
        </p>
        <p className="sub-description">
          Every piece we create is crafted with attention to detail and designed to make you feel confident, comfortable, and effortlessly stylish. We are more than just a brand—we’re a movement committed to customer satisfaction. While our store is not yet live, we are working tirelessly behind the scenes to bring you a seamless shopping experience and exclusive collections that truly reflect our commitment to excellence.
        </p>
        <div className="button-container">
          <button className="cta-button">Comming Soon</button>
        </div>
        <div className="follow-us">
          <p>
            Follow us for updates, sneak peeks, and the official launch announcement. Get ready to experience the future of affordable fashion with FitxNova!
          </p>
          <p className="hashtags">#YourStyleRedefined | #FitxNova</p>
        </div>
      </div>
      <footer className="footer">
        <p>© 2025 FitxNova. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default LandingPage;
