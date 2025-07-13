import { useState, useContext } from "react";
import { toast } from "react-toastify";
import { CardContext } from "../context/CardContextProvider";
import { ThemeContext } from "../context/ThemeProvider";
import { ConnectionsContext } from "../context/Connecitons";
const OpportunityCard = ({ photo, name, job, company, bio , _id }) => {
  const { theme } = useContext(ThemeContext);
  const [connect, setConnect] = useState(false);
  const { setCardData } = useContext(CardContext);
  const { setConnectionData } = useContext(ConnectionsContext)
  const handleConnect = async (e) => {
    e.preventDefault();
    if (connect) {
      toast.warn("Request already sent.");
      return;
    }
    try{
      const resp = await fetch(`http://localhost:7777/connect` , {
        method : 'POST' ,
        credentials : 'include',
        headers : {
          'content-type' : 'application/json'
        } , 
        body : JSON.stringify({
          to_id  : _id
        })
      })
      const connectionData = await resp.json()
      console.log(connectionData)
      setConnect(true);
      setCardData({photo , name});
      setConnectionData((prev) => [...prev , {photo , name}])
      toast.success(`Request Sent to ${name} for connection`)
    }catch(err){
      toast.dark(`Request Already Sent`);
      console.log(err.message)
    }
  };

  return (
    <div
      className={`${
        theme === "dark" ? "bg-[#121212] border-gray-600" : "bg-white border-gray-300"
      } rounded-2xl shadow-xl border p-6 w-full max-w-sm hover:shadow-2xl transition-all duration-300`}
    >
      <div className="flex flex-col items-center text-center">
        <img
          src={photo}
          alt={name}
          className="w-20 h-20 rounded-full object-cover mb-4 border-2 border-black"
          loading="lazy"
        />
        <h2
          className={`text-xl font-bold ${
            theme === "dark" ? "text-white" : "text-black"
          }`}
          style={{ fontFamily: "'Sora', sans-serif" }}
        >
          {name}
        </h2>
        <p className={`text-sm ${theme === "dark" ? "text-gray-300" : "text-gray-800"} font-medium`} style={{ fontFamily: "'Sora', sans-serif" }}>
          {job}
        </p>
        <p className={`text-sm ${theme === "dark" ? "text-gray-400" : "text-gray-700"} font-semibold mb-2`}>
          {company}
        </p>
        <p className={`text-sm ${theme === "dark" ? "text-gray-400" : "text-gray-600"} mb-4`}>
          {bio}
        </p>

        <button
          onClick={handleConnect}
          className={`px-5 py-2 rounded-full font-semibold text-sm border transition-all ${
            connect
              ? "bg-gray-400 text-gray-200 cursor-not-allowed border-gray-500"
              : theme === "dark"
              ? "bg-white text-black hover:bg-gray-100 border-white"
              : "bg-black text-white hover:bg-gray-900 border-black"
          }`}
          disabled={connect}
          aria-label={`Send connection request to ${name}`}
        >
          {connect ? "Request Sent" : "+ Connect"}
        </button>
      </div>
    </div>
  );
};

export default OpportunityCard;