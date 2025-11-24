import { useState, useContext } from "react";
import { toast } from "react-toastify";
import { CardContext } from "../context/CardContextProvider";
import { ThemeContext } from "../context/ThemeProvider";
import { ConnectionsContext } from "../context/Connecitons";
const OpportunityCard = ({ photo, name, job, company, bio, _id }) => {
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
    try {
      const resp = await fetch(`https://nexthorizon-backend-1.onrender.com/connect`, {
        method: 'POST',
        credentials: 'include',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify({
          to_id: _id
        })
      })
      const connectionData = await resp.json()
      console.log(connectionData)
      setConnect(true);
      setCardData({ photo, name });
      setConnectionData((prev) => [...prev, { photo, name }])
      toast.success(`Request Sent to ${name} for connection`)
    } catch (err) {
      toast.dark(`Request Already Sent`);
      console.log(err.message)
    }
  };

  return (
    <div
      className={`rounded-3xl p-6 w-full max-w-sm transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl backdrop-blur-xl border flex flex-col items-center text-center group ${theme === "dark"
        ? "bg-slate-900/70 border-slate-700/60 text-white hover:bg-slate-900/90"
        : "bg-white/70 border-white/50 text-gray-900 hover:bg-white/90"
        }`}
    >
      <div className="relative mb-6">
        <div className={`absolute inset-0 rounded-full blur-md opacity-50 ${theme === 'dark' ? 'bg-blue-500' : 'bg-blue-300'}`}></div>
        <img
          src={photo}
          alt={name}
          className={`relative w-24 h-24 rounded-full object-cover border-4 shadow-lg ${theme === 'dark' ? 'border-gray-700' : 'border-white'}`}
          loading="lazy"
        />
      </div>

      <h2
        className="text-xl font-bold mb-1"
        style={{ fontFamily: "'Sora', sans-serif" }}
      >
        {name}
      </h2>

      <p className={`text-sm font-medium mb-1 ${theme === "dark" ? "text-blue-400" : "text-blue-600"}`} style={{ fontFamily: "'Sora', sans-serif" }}>
        {job}
      </p>

      <p className={`text-xs font-semibold uppercase tracking-wide mb-4 ${theme === "dark" ? "text-gray-500" : "text-gray-500"}`}>
        {company}
      </p>

      <p className={`text-sm leading-relaxed mb-6 line-clamp-3 ${theme === "dark" ? "text-gray-300" : "text-gray-600"}`}>
        {bio}
      </p>

      <button
        onClick={handleConnect}
        className={`mt-auto px-8 py-2.5 rounded-xl font-semibold text-sm transition-all duration-300 transform active:scale-95 shadow-lg ${connect
          ? "bg-gray-500/50 text-gray-300 cursor-not-allowed"
          : theme === "dark"
            ? "bg-white text-black hover:bg-gray-200 hover:shadow-white/20"
            : "bg-black text-white hover:bg-gray-800 hover:shadow-black/30"
          }`}
        disabled={connect}
        aria-label={`Send connection request to ${name}`}
      >
        {connect ? "Request Sent" : "Connect"}
      </button>
    </div>
  );
};

export default OpportunityCard;