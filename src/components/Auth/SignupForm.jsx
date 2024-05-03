import React from "react";
import InputControl from "../common/InputControl";
import Button from "../common/Button";
import { Link } from "react-router-dom";

const SignupForm = () => {
  return (
    <section class="bg-gray-50 dark:bg-gray-900">
      <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto h-screen lg:py-0">
        {/* Logo  */}
        <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Account Signup
            </h1>
            <form class="space-y-4 md:space-y-6" action="#">
              <InputControl
                type="text"
                required
                label="Name"
                placeholder="eg. jerry hard"
              />
              <InputControl
                type="email"
                required
                label="Your email"
                placeholder="name@company.com"
              />
              <InputControl
                type="password"
                required
                label="Password"
                placeholder="1626***3"
              />

              <Button customClass="w-full">Sign in</Button>
              <p class="text-sm font-light text-gray-500 dark:text-gray-400">
                Already have an account?{" "}
                <Link
                  to="/auth/sign-in"
                  class="font-medium text-primary-600 hover:underline dark:text-primary-500"
                >
                  Sign in
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignupForm;
