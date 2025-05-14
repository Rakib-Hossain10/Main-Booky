import React from "react";
import { useAuth } from "../context/AuthProvider";
import toast from "react-hot-toast";

function Logout() {
  const [authUser, setAuthUser] = useAuth();
  const handleLogout = () => {
    try {
      setAuthUser({
        ...authUser,  //authUser a shob information thik rakhbo
        user: null,  // i am not removing all data — i am just setting the user property to null while keeping the other parts of the data the same.
      });
      localStorage.removeItem("Users");
      localStorage.removeItem("books");
      toast.success("Logout successfully");

      setTimeout(() => {
        window.location.reload();  //window automatically reload hobe
      }, 3000);
    } catch (error) {
      toast.error("Error: " + error);
      setTimeout(() => {}, 2000);
    }
  };

  return (
    <div>
      <button
        className="px-3 py-2 bg-red-500 text-white rounded-md cursor-pointer"
        onClick={handleLogout}
      >
        Logout
      </button>
    </div>
  );
}

export default Logout;
