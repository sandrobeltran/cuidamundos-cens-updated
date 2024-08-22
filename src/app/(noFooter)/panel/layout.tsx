import DashboardSideBar from "@/components/dashboard/DashboardSideBar";
import CustomMain from "@/components/layout/CustomMain";
import CustomSection from "@/components/layout/CustomSection";
import PaddingWrapper from "@/components/layout/PaddingWrapper";
import ChangeAvatarModal from "@/components/usuario/ChangeAvatarModal";
import EditProfileModal from "@/components/usuario/EditProfileModal";
import AdminRequired from "@/components/validations/AdminRequired";
import UserRequired from "@/components/validations/UserRequired";
import { ToastContainer } from "react-toastify";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <CustomMain>
      <UserRequired />
      <AdminRequired />
      <ToastContainer
        position="top-right"
        autoClose={3500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <div className="relative z-10 grid gap-4 h-screen w-full grid-cols-12 pt-20 text-stone-500">
        <DashboardSideBar />
        <div className="col-span-9 p-4">
          {children}
        </div>
      </div>
    </CustomMain>
  );
}
