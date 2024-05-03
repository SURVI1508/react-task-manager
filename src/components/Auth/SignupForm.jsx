import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import InputControl from "../common/InputControl";
import Button from "../common/Button";
import toast, { Toaster } from "react-hot-toast";
import { auth } from "../../firebase";

const SignupForm = () => {
  const [values, setValues] = useState({
    name: "",
    email: "rahul@gmail.com",
    password: "123456",
  });
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const handleSubmission = (e) => {
    e.preventDefault();
    setIsLoading(true);
    createUserWithEmailAndPassword(auth, values?.email, values?.password)
      .then(async (res) => {
        setIsLoading(false);
        const user = res.user;
        await updateProfile(user, {
          displayName: values?.name,
        });
        navigate("/");
      })
      .catch((err) => {
        setIsLoading(false);
        toast.error(err?.code);
      });
  };
  return (
    <section className="bg-gray-50 dark:bg-gray-900">
      <Toaster />
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto h-screen lg:py-0">
        {/* Logo  */}
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Account Signup
            </h1>
            <form
              onSubmit={handleSubmission}
              className="space-y-4 md:space-y-6"
              action="#"
            >
              <InputControl
                type="text"
                required
                label="Name"
                placeholder="eg. jerry hard"
                value={values?.name}
                name="name"
                onChange={handleChange}
              />
              <InputControl
                type="email"
                required
                label="Your email"
                placeholder="name@company.com"
                value={values?.email}
                name="email"
                onChange={handleChange}
              />
              <InputControl
                type="password"
                required
                label="Password"
                placeholder="1626***3"
                value={values?.password}
                name="password"
                onChange={handleChange}
              />

              <Button disabled={isLoading} type="submit" customClass="w-full">
                Sign up
              </Button>
              <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                Already have an account?{" "}
                <Link
                  to="/auth/sign-in"
                  className="font-medium text-primary-600 hover:underline dark:text-primary-500"
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
