import { Suspense } from "react";
import { auth } from "@/lib/auth";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import AdminPosts from "@/components/adminPosts/adminPosts";
import AdminPostForm from "@/components/adminPostForm/adminPostForm";
import AdminUsers from "@/components/adminUsers/adminUsers";
import AdminUserForm from "@/components/adminUserForm/adminUserForm";

const AdminPage = async () => {
  const session = await auth();

  return (
    <>
      <Navbar />
      <div className="container mt-10 flex flex-col gap-10">
        <div className="flex gap-10">
          <div className="flex-1">
            <Suspense fallback={<div>Loading...</div>}>
              <AdminPosts />
            </Suspense>
          </div>
          <div className="flex-1">
            <AdminPostForm userId={session.user.id} />
          </div>
        </div>
        <div className="flex gap-10">
          <div className="flex-1">
            <Suspense fallback={<div>Loading...</div>}>
              <AdminUsers />
            </Suspense>
          </div>
          <div className="flex-1">
            <AdminUserForm />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AdminPage;
