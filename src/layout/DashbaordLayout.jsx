import { Outlet } from "react-router-dom";
import Sidebar from "../components/dashboard/Sidebar";

function DashbaordLayout() {
  return (
    <div className="flex w-full ">
      <div className="w-2/12 border-r h-screen">
        <Sidebar></Sidebar>
      </div>
      <div className="w-full bg-[#FAFAFA] flex-1 p-6">
      <Outlet></Outlet>
      </div>
    </div>
  );
}

export default DashbaordLayout;
