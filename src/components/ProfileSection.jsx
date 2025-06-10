import { useContext , useState } from "react";
import FormContext from "../context/FormContext";
import Nav from "./Nav";
import { LucideEdit } from "lucide-react";

const ProfileSection = () => {
  const { formData } = useContext(FormContext);

  return (
    <>
      <Nav />
      <div className="min-h-screen flex flex-col items-center justify-center bg-white py-10">
        <div className="bg-gray-100 p-6 rounded-2xl shadow-lg w-full max-w-2xl">
          <h1 className="text-3xl font-bold mb-6 text-center" style={{ fontFamily: "'Lexend Zetta'" }}>
            My Profile
          </h1>
          <div className="space-y-4 text-lg text-gray-800">
            <ProfileItem label="Name" value={formData.name} field={`name`}/>
            <ProfileItem label="Gender" value={formData.gender} field={`gender`}/>
            <ProfileItem label="Mobile Number" value={formData.mobileNo} field={`mobileNo`}/>
            <ProfileItem label="Bachelor's Degree" value={formData.bachelorsDegree} field={`bachelorsDegree`}/>
            <ProfileItem label="Master's Degree" value={formData.MastersDegree} field={`MastersDegree`}/>
            <ProfileItem label="College/University" value={formData.college} field={`college`}/>
            <ProfileItem label="Graduation Year" value={formData.graduationYear} field={`graduationYear`} />
            <ProfileItem label="Location" value={formData.location} field={`location`}/>
            <ProfileItem label="Bio" value={formData.bio} field={`bio`}/>
          </div>
        </div>
      </div>
    </>
  );
};

const ProfileItem = ({ label, value, field }) => {
  const { formData, setFormData } = useContext(FormContext);
  const [editMode, setEditMode] = useState(false);
  const [tempValue, setTempValue] = useState(value);

  const handleSave = () => {
    setFormData({ ...formData, [field] : tempValue });
    setEditMode(false);
  };

  return (
    <div className="flex justify-between items-center border-b border-gray-300 pb-2">
      <span className="font-semibold">{label}:</span>
      <div className="flex items-center gap-2">
        {editMode ? (
          <>
            <input
              type="text"
              value={tempValue}
              onChange={(e) => setTempValue(e.target.value)}
              className="bg-white border border-gray-300 rounded px-2 py-1 w-48"
            />
            <button
              onClick={handleSave}
              className="text-green-600 font-semibold text-sm hover:underline"
            >
              Save
            </button>
          </>
        ) : (
          <>
            <span className="text-right">{value || "—"}</span>
            <LucideEdit
              className="text-blue-500 cursor-pointer"
              size={16}
              onClick={() => setEditMode(true)}
            />
          </>
        )}
      </div>
    </div>
  );
};

export default ProfileSection;