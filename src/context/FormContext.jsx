import React, { useState, useEffect } from "react";
import FormContext from "./FormContext";

const FormProvider = ({ children }) => {
  const [formData, setFormData] = useState(() => {

    const storedData = localStorage.getItem("formData");
    return storedData ? JSON.parse(storedData) : {
      name: '',
      gender: '',
      mobileNo: '',
      MastersDegree: '',
      bachelorsDegree: '',
      college: '',
      graduationYear: '',
      location: '',
      bio: ''
    };
  });


  useEffect(() => {
    localStorage.setItem("formData", JSON.stringify(formData));
  }, [formData]);

  return (
    <FormContext.Provider value={{ formData, setFormData }}>
      {children}
    </FormContext.Provider>
  );
};

export default FormProvider;