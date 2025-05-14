
import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";


function Signup() {
  const location = useLocation(); //location a je page theke signup page e asche ta thakbe
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/"; //jei page theke ashche oikhane jabe ba home page e jabe
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();



  const onSubmit = async (data) => {
    //signup page a user ja information dibe shob ai data te save hobe
    const userInfo = {
      fullname: data.fullname,
      email: data.email,
      password: data.password,
      semester: data.semester,
    };

    await axios
    .post("https://main-booky.onrender.com/user/signup", userInfo)
    .then((res) => {
      console.log(res.data);
      if (res.data) {
        toast.success("Signup Successfully");
        navigate(from, { replace: true });
      }
      localStorage.setItem("Users", JSON.stringify(res.data.user));
      
    })
    .catch((err) => {
      if (err.response) {
        console.log(err);
        toast.error("Error: " + err.response.data.message);
      }
    });
}; 
  return (
    <>
      <div className="flex h-screen items-center justify-center">
        <div className=" w-[600px] ">
          <div className="modal-box">
            <form onSubmit={handleSubmit(onSubmit)} method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <Link
                to="/"
                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 dark:text-black"
              >
                ✕
              </Link>

              <h3 className="font-bold text-lg dark:text-black mb-8">Signup</h3>
              <div className="mt-4 space-y-2">
                <span className="dark:text-black">Name</span>
                <br />
                <input
                  type="text"
                  placeholder="Enter your fullname"
                  className="w-80 px-3 py-1 border rounded-md outline-none dark:text-black"
                  {...register("fullname", { required: true })}
                />
                <br />
                {errors.fullname && (
                  <span className="text-sm text-red-500">
                    This field is required
                  </span>
                )}
              </div>
              {/* Email */}
              <div className="mt-4 space-y-2">
                <span className="dark:text-black">Email</span>
                <br />
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-80 px-3 py-1 border rounded-md outline-none dark:text-black"
                  {...register("email", { required: true })}
                />
                <br />
                {errors.email && (
                  <span className="text-sm text-red-500">
                    This field is required
                  </span>
                )}
              </div>
              {/* Password */}
              <div className="mt-4 space-y-2">
                <span className="dark:text-black" >Password</span>
                <br />
                <input
                  type="text"
                  placeholder="Enter your password"
                  className="w-80 px-3 py-1 border rounded-md outline-none dark:text-black"
                  {...register("password", { required: true })}
                />
                <br />
                {errors.password && (
                  <span className="text-sm text-red-500">
                    This field is required
                  </span>
                )}
              </div>

              <div className="mt-4 space-y-2">
                <span className="dark:text-black" >Semester</span>
                <br />
                <select
                  className="w-80 px-3 py-1 border rounded-md outline-none dark:text-black"
                  {...register("semester", { required: true })}
                >
                  <option value="">Select your semester</option>
                  <option value="1st">1st Semester</option>
                  <option value="2nd">2nd Semester</option>
                  <option value="3rd">3rd Semester</option>
                  <option value="4th">4th Semester</option>
                  <option value="5th">5th Semester</option>
                  <option value="6th">6th Semester</option>
                  <option value="7th">7th Semester</option>
                  <option value="8th">8th Semester</option>
                  
                </select>
                <br />
                {errors.semester && (
                  <span className="text-sm text-red-500">
                    This field is required
                  </span>
                )}
              </div>

              {/* Button */}
              <div className="flex justify-around mt-4">
                <button className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200">
                  Signup
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup;