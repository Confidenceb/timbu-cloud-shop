import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ProductList from "../components/ProductList";
import Filter from "../components/Filter";
import "./Home.css";

const Home = () => (
  <div className="home">
    <Header />
    <div className="main-content">
      <Filter />
      <ProductList />
    </div>
    <Footer />
  </div>
);

export default Home;
