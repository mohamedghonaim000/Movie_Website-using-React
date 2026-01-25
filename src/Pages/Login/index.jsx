import React, { useState } from "react";

export default function Login() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState({
    emailError: null,
    passwordError: null,
  });

  const handleOnChange = (evt) => {
    if (evt.target.name === "Email") {
      setUser({ ...user, email: evt.target.value });
      setError({
        ...error,
        emailError:
          evt.target.length == 0
            ? "Email is Required"
            : !evt.target.value.includes("@")
              ? "Email must include @"
              : null,
      });
    }

    if (evt.target.name === "Password") {
      setUser({ ...user, password: evt.target.value });
      setError({
        ...error,
        passwordError:
          evt.target.length == 0
            ? "Password is Required"
            : evt.target.value.length < 6
              ? "Password must be at least 6 characters"
              : null,
      });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0a0a0a] font-sans text-gray-200">
      <div className="w-full max-w-md p-8 bg-[#141414] rounded-xl shadow-2xl border border-white/5">
        <div className="mb-10 text-center">
          <h1 className="text-4xl font-black text-white tracking-tighter uppercase">
            Movie<span className="text-(--primary-color)">Login</span>
          </h1>
          <p className="text-gray-500 text-sm mt-2 font-medium">
            Please enter your details
          </p>
        </div>

        <form className="space-y-5" onSubmit={(e) => {e.preventDefault()
         console.log(user);}
        }>
          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-widest text-gray-400 ml-1">
              Email Address
            </label>
            <input
              type="email"
              name="Email"
              onChange={(e) => {
                handleOnChange(e);
              }}
              className="w-full h-12 px-4 bg-[#1f1f1f] border border-[#333] rounded-lg focus:outline-none focus:border-(--primary-color) focus:ring-1 focus:ring-(--primary-color) transition-all text-white"
              placeholder="name@domain.com"
            />
            {error.emailError && (
              <small id="emailHelp" className="form-text  text-red-600">
                {error.emailError}
              </small>
            )}
          </div>

          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-widest text-gray-400 ml-1">
              Password
            </label>
            <input
              name="Password"
              type="password"
              onChange={(e) => {
                handleOnChange(e);
              }}
              className="w-full h-12 px-4 bg-[#1f1f1f] border border-[#333] rounded-lg focus:outline-none focus:border-(--primary-color) focus:ring-1 focus:ring-(--primary-color) transition-all text-white"
              placeholder="password.."
            />
            {error.passwordError && (
              <small id="emailHelp" className="form-text  text-red-600">
                {error.passwordError}
              </small>
            )}
          </div>

          <div className="flex items-center justify-end">
            <a
              href="#"
              className="text-xs text-(--primary-color)  transition-colors"
            >
              Forgot password?
            </a>
          </div>

          <button disabled={(error.emailError || error.passwordError || user.email == '' || user.password == '')} className="w-full h-12 bg-(--primary-color)  text-white font-bold rounded-lg  mt-2 shadow-lg shadow-red-900/20 transition-all active:scale-[0.98]">
            Sign In
          </button>
        </form>

        <div className="mt-8 pt-6 border-t border-[#222] text-center">
          <p className="text-gray-500 text-sm">
            Don't have an account?{" "}
            <a
              href="#"
              className="text-white font-bold focus:border-(--primary-color) transition-colors"
            >
              Sign up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
