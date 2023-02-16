import React from "react";
import Content from "./content";
import './css/index.css';
import Header from "./header";
import Navbar from "./navbar";
import Footer from './footer';

function App() {
  return (
    <div className="wraper">

      <Header />
      <Navbar />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
