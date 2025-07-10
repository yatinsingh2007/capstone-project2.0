import { useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../context/ThemeProvider";

const MainFooter = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <footer
      className={`w-full mt-8 py-6 px-4 flex flex-col md:flex-row items-center justify-between border-t ${
        theme === "dark"
          ? "bg-black border-neutral-700 text-gray-300"
          : "bg-white border-neutral-200 text-gray-700"
      }`}
    >
      <div className="mb-4 md:mb-0">
        <h2 className="font-bold text-lg">
          NextHorizon
        </h2>
        <p className="text-sm">
          Connecting you to opportunities that matter.
        </p>
      </div>
      <div className="flex space-x-4">
        <Link
          to="/main"
          className="hover:underline text-sm"
        >
          Home
        </Link>
        <Link
          to="/opper"
          className="hover:underline text-sm"
        >
          Opportunities
        </Link>
        <Link
          to="/job"
          className="hover:underline text-sm"
        >
          Jobs
        </Link>
        <Link
          to="/myProfile"
          className="hover:underline text-sm"
        >
          Profile
        </Link>
      </div>
      <p className="text-xs mt-4 md:mt-0">
        © {new Date().getFullYear()} NextHorizon. All rights reserved.
      </p>
    </footer>
  );
};

export default MainFooter;