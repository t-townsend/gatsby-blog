import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const PrimaryLayout = (props) => (
  <main>
    <Header />
    <div className="container">
      <div className="row justify-content-md-center">
        <div className={props.column}>
            {props.children}
        </div>
      </div>
    </div>
    <Footer fixed="bottom" />
  </main>
);

export default PrimaryLayout;