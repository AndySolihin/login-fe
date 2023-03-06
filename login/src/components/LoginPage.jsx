import React, { useRef } from "react";
import Button from "inbound/Button";

import InputField from "inbound/InputField";

export default function LoginPage({ onLoginHandler }) {
  const emailRef = useRef();
  const passwordRef = useRef();
  return (
    <div className="relative flex flex-col justify-center min-h-screen overflow-hidden py-6 mx-auto px-8">
      <h1 className="text-3xl font-bold text-center">Warehouse</h1>
      <hr className="w-44 mx-auto border-2 border-primary" />
      <p className="text-center ">
        <i>Management System</i>
      </p>
      <div className="w-full px-12 m-auto bg-white rounded-md shadow-md lg:max-w-xl">
        <h2 className="text-2xl font-semibold text-center">Login</h2>
        <form className="w-4/5 mx-auto py-6 flex flex-col justify-start items-start gap-6">
          <InputField label="Email" type="email" reference={emailRef} />
          <div className="flex justify-start items-start gap-5 flex-col w-full">
              <InputField
              label="Password"
              type="password"
              reference={passwordRef}
            />
            <button className="text-xs text-gray-400 hover:underline ml-auto ">
              Forget Password?
            </button>
          </div>
          <Button text="Login" type="submit" clickHandler={onLoginHandler} />
        </form>
      </div>
    </div>
  );
}
