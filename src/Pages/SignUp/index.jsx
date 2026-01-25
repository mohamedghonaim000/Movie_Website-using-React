import React from "react";
import { useForm } from "react-hook-form";

export default function SignUp() {
  const {
    handleSubmit,
    register,
    watch,
    formState: { errors },
  } = useForm();

  const password = watch("password");

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0a0a0a] font-sans text-gray-200">
      <div className="w-full max-w-md p-8 bg-[#141414] rounded-xl shadow-2xl border border-white/5">
        <div className="mb-10 text-center">
          <h1 className="text-4xl font-black text-white tracking-tighter uppercase">
            Movie<span className="text-(--primary-color)">Sign Up</span>
          </h1>
          <p className="text-gray-500 text-sm mt-2 font-medium">
            Please enter your details
          </p>
        </div>

        <form className="space-y-5" onSubmit={handleSubmit(onSubmit)}>
          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-widest text-gray-400 ml-1">
              User Name
            </label>
            <input
              type="text"
              placeholder="User Name"
              className="w-full h-12 px-4 bg-[#1f1f1f] border border-[#333] rounded-lg focus:outline-none focus:border-(--primary-color) focus:ring-1 focus:ring-(--primary-color) transition-all text-white"
              {...register("userName", {
                required: "User name is required",
                minLength: {
                  value: 3,
                  message: "User name must be at least 3 characters",
                },
              })}
            />
            {errors.userName && (
              <small className="text-red-600">{errors.userName.message}</small>
            )}
          </div>

          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-widest text-gray-400 ml-1">
              Email Address
            </label>
            <input
              type="email"
              placeholder="name@domain.com"
              className="w-full h-12 px-4 bg-[#1f1f1f] border border-[#333] rounded-lg focus:outline-none focus:border-(--primary-color) focus:ring-1 focus:ring-(--primary-color) transition-all text-white"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Invalid email format",
                },
              })}
            />
            {errors.email && (
              <small className="text-red-600">{errors.email.message}</small>
            )}
          </div>

          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-widest text-gray-400 ml-1">
              Password
            </label>
            <input
              type="password"
              placeholder="Password"
              className="w-full h-12 px-4 bg-[#1f1f1f] border border-[#333] rounded-lg focus:outline-none focus:border-(--primary-color) focus:ring-1 focus:ring-(--primary-color) transition-all text-white"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters",
                },
              })}
            />
            {errors.password && (
              <small className="text-red-600">{errors.password.message}</small>
            )}
          </div>

          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-widest text-gray-400 ml-1">
              Confirm Password
            </label>
            <input
              type="password"
              placeholder="Confirm Password"
              className="w-full h-12 px-4 bg-[#1f1f1f] border border-[#333] rounded-lg focus:outline-none focus:border-(--primary-color) focus:ring-1 focus:ring-(--primary-color) transition-all text-white"
              {...register("confirmPassword", {
                required: "Confirm password is required",
                validate: (value) =>
                  value === password || "Passwords do not match",
              })}
            />
            {errors.confirmPassword && (
              <small className="text-red-600">
                {errors.confirmPassword.message}
              </small>
            )}
          </div>

          <button
            type="submit"
            className="w-full h-12 bg-(--primary-color) text-white font-bold rounded-lg mt-2 shadow-lg shadow-red-900/20 transition-all active:scale-[0.98]"
          >
            Sign Up
          </button>
        </form>

        <div className="mt-8 pt-6 border-t border-[#222] text-center">
          <p className="text-gray-500 text-sm">
            Already have an account?{" "}
            <a
              href="#"
              className="text-white font-bold focus:border-(--primary-color) transition-colors"
            >
              Login
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
