import React from "react";
import Header from "../../components/Header";
import MenuUser from "../../components/MenuUser";
import Banner from "../../components/Banner";
import OrderTicketOnline from "../../components/OrderTicketOnline";
import ToasterProvider from "../../providers/ToasterProvider";
import Movies from "../../components/Movies";
import Promotion from "../../components/Promotion";
import News from "../../components/News";
import Footer from "../../components/Footer";

const HomePage = () => {
  return (
    <div className="mainBackground">
      <ToasterProvider />
      <Header />
      <MenuUser />
      <Banner />
      <OrderTicketOnline />
      <Movies />
      <Promotion />
      <News />
      <Footer />
    </div>
  );
};

export default HomePage;
