import { Link, useNavigate } from "react-router-dom";
import Button from "../common/Button";
import InputControl from "../common/InputControl";
import { auth } from "../../firebase";
import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import toast, { Toaster } from "react-hot-toast";
const SigninForm = () => {
  const [values, setValues] = useState({
    email: "jerry@gmail.com",
    password: "123456",
  });
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const handleSubmission = (e) => {
    e.preventDefault();
    setIsLoading(true);
    signInWithEmailAndPassword(auth, values.email, values.password)
      .then(async (res) => {
        toast.success("Logged in successfully!");
        setIsLoading(false);
        navigate("/");
      })
      .catch((err) => {
        setIsLoading(false);
        toast.error(err?.code);
      });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };
  return (
    <section className="bg-gray-50 dark:bg-gray-900">
      <Toaster />
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto h-screen lg:py-0">
        {/* Logo  */}
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Sign in to your account
            </h1>
            <form
              onSubmit={handleSubmission}
              className="space-y-4 md:space-y-6"
              action="#"
            >
              <InputControl
                type="email"
                required
                label="Your email"
                placeholder="name@company.com"
                name="email"
                onChange={handleChange}
                value={values?.email}
              />
              <InputControl
                type="password"
                required
                label="Password"
                placeholder="1626***3"
                name="password"
                onChange={handleChange}
                value={values?.password}
              />

              <Button customClass="w-full" disabled={isLoading}>
                Sign in
              </Button>
              <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                Dont have an account yet?{" "}
                <Link
                  to="/auth/sign-up"
                  className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                >
                  Sign up
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SigninForm;
