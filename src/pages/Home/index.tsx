import React from "react";
import Header from "../../components/Header";
import MenuUser from "../../components/MenuUser";
import Banner from "../../components/Banner";
import OrderTicketOnline from "../../components/OrderTicketOnline";
import ToasterProvider from "../../providers/ToasterProvider";
import TestComponent from "../../components/TestComponent";
import Movies from "../../components/Movies";

const HomePage = () => {
  return (
    <div className="mainBackground">
      <ToasterProvider />
      <Header />
      <MenuUser />
      <Banner />
      <OrderTicketOnline />
      <Movies />
      <TestComponent />
    </div>
  );
};

export default HomePage;
