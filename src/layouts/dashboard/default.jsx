import React from "react";

//header
import Header from "../../components/partials/dashboard/HeaderStyle/header";

//sidebar
import RightSidebar from "../../components/partials/dashboard/SidebarStyle/rightsidebar";

//sidebar
import Sidebar from "../../components/partials/dashboard/SidebarStyle/sidebar";

//footer
import Footer from "../../components/partials/dashboard/FooterStyle/footer";

//settingoffCanvas
import SettingOffCanvas from "../../components/setting/SettingOffCanvas";
import { Outlet } from "react-router-dom";

const Default = () => {
  return (
    <>
      <Sidebar />
      {/* <HeaderOne/> */}
      <div className="main-content">
        <div className="position-relative">
        <Header />
        {/* <div id="content-page" className="content-inner"> */}
        {/* <DefaultRouter/> */}
        <Outlet />
        {/* </div> */}

        </div>
      </div>
      <RightSidebar />
      <Footer />
      <SettingOffCanvas />
    </>
  );
};

export default Default;
