import { Outlet } from "react-router-dom";
import Header from "../components/Header";

const MainLayout = () => {
  return (
    <>
      <Header />//sabi page ma dekina parxa
      <Outlet />//content 
    </>
  );
};

export default MainLayout;