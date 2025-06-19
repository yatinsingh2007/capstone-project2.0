import { useState, useContext } from "react";
import { toast } from "react-toastify";
import {CardContext} from "../context/CardContextProvider";

const OpportunityCard = ({ photo, name, job, company, bio }) => {
  const [connect, setConnect] = useState(false);
  const { setCardData } = useContext(CardContext);

  const handleConnect = (e) => {
    e.preventDefault();
    if (connect) {
      toast.warn("Request already sent.");
      return;
    }

    setConnect(true);
    setCardData({ photo, name });
    toast.success(`Request sent to ${name} for connection.`);
  };

  return (
    <div className="bg-gray-100 rounded-2xl shadow-md p-6 w-full max-w-sm hover:shadow-xl transition-all duration-300">
      <div className="flex flex-col items-center text-center">
        <img
          src={photo}
          alt={name}
          className="w-20 h-20 rounded-full object-cover mb-4 border-4 border-white shadow-sm"
        />
        <h2 className="text-xl font-bold text-gray-900" style={{ fontFamily: "'Lexend Zetta'" }}>
          {name}
        </h2>
        <p className="text-sm text-blue-600 font-medium">{job}</p>
        <p className="text-sm text-gray-700 font-semibold mb-2">{company}</p>
        <p className="text-sm text-gray-600 mb-4">{bio}</p>

        <button
          onClick={handleConnect}
          className={`px-5 py-2 rounded-full font-semibold transition-all ${
            connect
              ? "bg-slate-400 text-white cursor-not-allowed"
              : "bg-[#090DFF] text-white hover:opacity-90"
          }`}
          disabled={connect}
        >
          {connect ? "Request Sent" : "+ Connect"}
        </button>
      </div>
    </div>
  );
};

export default OpportunityCard;