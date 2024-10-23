import { Outlet } from "react-router-dom";
import Sidebar from "../components/dashboard/Sidebar";
import MainContextProvider from "@/provider/MainContextProvider";
import AosInit from "@/aos/AosInit";

function DashbaordLayout() {
  return (
    <MainContextProvider>
      <AosInit>
        <div className="flex w-full ">
          <div className="w-[320px] fixed border-r h-screen">
            <Sidebar></Sidebar>
          </div>
          <div  className="ml-[320px] bg-[#FAFAFA] flex-1 p-6">
            <Outlet></Outlet>
          </div>
        </div>
      </AosInit>
    </MainContextProvider>
  );
}

export default DashbaordLayout;
