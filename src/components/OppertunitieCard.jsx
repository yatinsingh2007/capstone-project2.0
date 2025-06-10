import { useState } from "react";
import { toast } from "react-toastify";
const OpportunityCard = ({ photo , name , job , company ,bio }) => {
  const [connect , setConnect] = useState(false)
  return (
    <div className="bg-white shadow-md rounded-2xl p-4 w-full max-w-sm hover:shadow-xl transition">
      <div className="flex flex-col items-center text-center">
        <img src={photo} alt={name} className="w-16 h-16 rounded-full object-cover mx-auto"/>
        <h2 className="text-xl font-semibold">{name}</h2>
        <p className="text-sm text-gray-500">{job}</p>
        <p className="text-sm font-medium text-gray-600">{company}</p>
        <p className="mt-2 text-sm text-gray-700">{bio}</p>
        <button className={ connect ? `bg-slate-400 text-zinc-800 p-2 rounded-full mt-3 font-bold` : `bg-blue-600 text-white p-2 rounded-full mt-3 font-bold`} onClick={(e) => {
          e.preventDefault()
          if(connect){
            toast.warn(`Request sent cannot be retreived.`)
          }
          setConnect(true)
          return
        }}>{connect ? 'Request sent' : '+ connect'}</button>
      </div>
    </div>
  );
};

export default OpportunityCard;  