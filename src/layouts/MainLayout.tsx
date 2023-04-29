import React, { ReactNode, Suspense } from "react";
import ToasterProvider from "../providers/ToasterProvider";
import Header from "../components/Header";
import MenuUser from "../components/MenuUser";
import Banner from "../components/Banner";
import OrderTicketOnline from "../components/OrderTicketOnline";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <>
      <ToasterProvider />
      <Header />
      <MenuUser />
      <Banner />
      <OrderTicketOnline />
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
      <Footer />
    </>
  );
};

export default MainLayout;
