import React from "react";
import { Link } from "react-router-dom";
import Login from "../Login/Login";
import { useForm } from "react-hook-form"

const Signup = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm()
      const onSubmit = (data) => console.log(data)
  return (
    <>
      <div className="flex h-screen items-center justify-center">
        {/* You can open the modal using document.getElementById('ID').showModal() method */}

        <div className="border shadow-md rounded-md">
          <div className="modal-box w-full">
            <form onSubmit={handleSubmit(onSubmit)} method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <Link
                to="/"
                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              >
                ✕
              </Link>

              <h3 className="font-bold text-lg text-center">Signup</h3>
              {/* Name */}
              <div className="mt-4 space-y-2">
                <span>Name:</span>
                <br />
                <input
                  type="text"
                  className="w-80 px-3 py-1 border rounded-md outline-none"
                  placeholder="Enter your fullname"
                  {...register("name", { required: true })}
                />
                <br />
                {errors.email && <span className="text-sm text-red-500">This field is required</span>}
              </div>
              {/* Email */}
              <div className="mt-4 space-y-2">
                <span>Email:</span>
                <br />
                <input
                  type="email"
                  className="w-80 px-3 py-1 border rounded-md outline-none"
                  placeholder="Enter your Email"
                  {...register("email", { required: true })}
                />
                <br />
                {errors.email && <span className="text-sm text-red-500">This field is required</span>}
              </div>
              {/* Password */}
              <div className="mt-4 space-y-2">
                <span>Password:</span>
                <br />
                <input
                  type="password"
                  className="w-80 px-3 py-1 border rounded-md outline-none"
                  placeholder="Enter your password..."
                  {...register("password", { required: true })}
                />
                <br />
                {errors.email && <span className="text-sm text-red-500">This field is required</span>}
              </div>
              {/* Login button */}
              <div className="flex items-center justify-between mt-4">
                <button className="bg-pink-600 text-white hover:bg-pink-800 hover:text-white px-2 py-1 rounded-md">
                  Signup
                </button>
                <div className="flex gap-1">
                  <p>New Account?</p>
                  <button
                    onClick={() =>
                      document.getElementById("my_modal_3").showModal()
                    }
                    className=" text-blue-500 cursor-pointer hover:underline"
                  >
                    Login
                  </button>
                  <Login />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
