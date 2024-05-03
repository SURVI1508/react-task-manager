import { Link } from "react-router-dom";
import { useAuth } from "../../context/authContext";

const HomePage = () => {
  const { user } = useAuth();
  const { email, displayName, accessToken } = user || {};
  return (
    <section className="py-10 relative w-full min-h-screen flex flex-col items-center justify-center">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto w-full text-center ">
          <h2 className="text-[2.2rem] font-[800] leading-tight text-black sm:text-4xl lg:text-5xl">
            Get full access to Platform
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
            nesciunt eos facilis debitis voluptas iure consectetur odit fugit
            voluptate recusandae?
          </p>
        </div>

        <div className="w-full flex items-center justify-center mt-5">
          <Link to={accessToken ? "/task" : "/auth/sign-in"}>
            <button
              type="button"
              className="mx-auto rounded-[5px] bg-black px-8 py-3 text-sm font-medium text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            >
              {accessToken ? "Go to task" : "Get Started"}
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HomePage;
