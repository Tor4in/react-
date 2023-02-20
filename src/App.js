import React from "react";
import Content from "./jsx/content";
import './css/index.css';
import Header from "./jsx/header";
import Navbar from "./jsx/navbar";
import Footer from './jsx/footer';

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
