import React, { useEffect, useState } from "react";

const Step_1 = ({ setValidated }) => {
  const [validate, setValidate] = useState(true);
  const [inputValue, setInputValue] = useState({
    f_name: "",
    l_name: "",
    email: "",
    Phone_number: "",
    residential_address: ""
  });

  useEffect(() => {
    
    const isValid = 
      inputValue.f_name !== "" &&
      inputValue.l_name !== "" &&
      inputValue.email !== "" &&
      inputValue.Phone_number !== "" &&
      inputValue.residential_address !== "";

    setValidate(!isValid);
    setValidated(!isValid);
  }, [inputValue, setValidated]);

  return (
    <>
      <div className="container">
        <h2 className="text-center form_heading">Registration Form</h2>
        <div className="row mt-4">
          <div className="col-lg-6 col-md-12">
            <label htmlFor="" className="label_class">First Name</label>
            <input
              type="text"
              onChange={(e) => setInputValue({ ...inputValue, f_name: e.target.value })}
              placeholder="Enter Your First Name"
              className="form-control mt-2 mb-4 p-3"
              name=""
              id=""
            />
          </div>
          <div className="col-lg-6 col-md-12">
            <label htmlFor="" className="label_class">Last Name</label>
            <input
              type="text"
              onChange={(e) => setInputValue({ ...inputValue, l_name: e.target.value })}
              placeholder="Enter Your Last Name"
              className="form-control mt-2 mb-4 p-3"
              name=""
              id=""
            />
          </div>
          <div className="col-lg-6 col-md-12">
            <label htmlFor="" className="label_class">Email</label>
            <input
              type="email"
              onChange={(e) => setInputValue({ ...inputValue, email: e.target.value })}
              placeholder="Enter Your Email"
              className="form-control mt-2 mb-4 p-3"
              name=""
              id=""
            />
          </div>
          <div className="col-lg-6 col-md-12">
            <label htmlFor="" className="label_class">Phone Number</label>
            <input
              type="number"
              onChange={(e) => setInputValue({ ...inputValue, Phone_number: e.target.value })}
              placeholder="Enter Your Phone Number"
              className="form-control mt-2 mb-4 p-3"
              name=""
              id=""
            />
          </div>
          <div className="col-lg-6 col-md-12">
            <label htmlFor="" className="label_class">Residential Address</label>
            <input
              type="text"
              onChange={(e) => setInputValue({ ...inputValue, residential_address: e.target.value })}
              placeholder="Enter Your Residential Address"
              className="form-control mt-2 mb-4 p-3"
              name=""
              id=""
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Step_1;
