import React from "react";
import { useState } from "react";
import axios from "axios";
import Footer from "../Footer";
import Header from '../Header'

import Nav from "./Nav";
import { useNavigate } from "react-router-dom";
function BasicInfo() {
    const navigate=useNavigate();
  const [stdDetails, setStdDetails] = useState({
    Salutation: "",
    FirstName: "",
    MiddleName: "",
    LastName: "",
    DOB: "",
    Age: "",
    Abled: "",
    Category: "",
    AadharNo: "",
  });

  const [photo, setPhoto] = useState("");
  const [certificate, setCertificate] = useState("");

  const handleStdChange = (e) => {
    const { name, value } = e.target;
    setStdDetails(() => {
      return {
        ...stdDetails,
        [name]: value,
      };
    });
  };

  const handlePhotoChange = (e) => {
    setPhoto(e.target.files[0]);
  };

  const handleCertificateChange = (e) => {
    setCertificate(e.target.files[0]);
  };

  const [GuardianDetails, setGuardianDetails] = useState({
    Salutation: "",
    Name: "",
    MobileNumber: "",
    Email: "",
    Occupation: "",
    AnnualIncome: "",
  });

  const handleGuardChange = (e) => {
    const { name, value } = e.target;
    setGuardianDetails(() => {
      return {
        ...GuardianDetails,
        [name]: value,
      };
    });
  };

  const handleSubmit = async () => {
    const resultData = await axios.post("http://localhost:5000/mba/basicInfo", {
      stdDetails,
      GuardianDetails,
    });
    console.log(resultData.data);


    const formDataPhotoFile = new FormData();
    formDataPhotoFile.append("file", photo);

    try {
      const res1 = await axios.post(
        "http://localhost:5000/mba/uploads/basicInfo/photo",
        formDataPhotoFile,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      const { fileName, filePath, folderName } = res1.data;
      console.log(fileName, filePath, folderName);
    } catch (err) {
      if (err.response.status === 500) {
        console.log("There was a problem with the server");
      } else {
        console.log(err.response.msg);
      }
    }

    const formDataCertificateFile = new FormData();
    formDataCertificateFile.append("file", certificate);

    try {
      const res1 = await axios.post(
        "http://localhost:5000/mba/uploads/basicInfo/certificate",
        formDataCertificateFile,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      const { fileName, filePath, folderName } = res1.data;
      console.log(fileName, filePath, folderName);
    } catch (err) {
      if (err.response.status === 500) {
        console.log("There was a problem with the server");
      } else {
        console.log(err.response.msg);
      }
    }
    navigate("/mba/contact")
  };

  return (
    <>
     <Header />
      <Nav />
    
   
    
     
      
      <div className='  marg background space-y-5 py-5 px-5 mr-auto ml-auto flex flex-col justify-center items-center text-left  '>
      <form className= "bg-white px-30 py-15 shadow rounded-lg sm:px-10 w-lg sm: w-2/4  ">
      <label className="block">
    <span className="block text-sm font-medium text-slate-700 py-2">Username</span>
      <p >Salutation</p>
        <select
          name="Salutation"
          value={stdDetails.Salutation}
          onChange={handleStdChange}
          className=" form-control
      block
      w-11/12
      px-3
      py- 3
      rounded
      shadow-sm
      
      focus: ring-1
      text-base
      font-normal
      text-gray-700
      bg-grey bg-clip-padding
       border border-solid border-gray-600
      transition
      ease-in-out

      focus:text-gray-700 focus:bg-transparent focus:border-blue-600 focus:outline-none"
        >
          <option>Mr.</option>
          <option>Mrs.</option>
          <option value="2">Miss</option>
        </select>
        <p className="pt-1.5">First Name</p>
        <input
          type="text"
          name="FirstName"
          value={stdDetails.FirstName}
          onChange={handleStdChange}
          className=" form-control
      block
      w-11/12
      px-3
      py-1.5
      text-base
      font-normal
      text-gray-700
      bg-transparent bg-clip-padding
      border border-solid border-gray-600
      rounded
      transition
      ease-in-out
      m-0
      focus:text-gray-700 focus:bg-transparent focus:border-blue-600 focus:outline-none"
        />
        <p className="pt-1.5" >Middle Name</p>
        <input
          type="text"
          name="MiddleName"
          value={stdDetails.MiddleName}
          onChange={handleStdChange}
          className=" form-control
      block
      w-11/12
      px-3
      py-1.5
      text-base
      font-normal
      text-gray-700
      bg-transparent bg-clip-padding
      border border-solid border-gray-600
      rounded
      transition
      ease-in-out
      m-0
      focus:text-gray-700 focus:bg-transparent focus:border-blue-600 focus:outline-none"
        />
        <p className="pt-1.5">Last Name</p>
        <input
          type="text"
          name="LastName"
          value={stdDetails.LastName}
          onChange={handleStdChange}
          className=" form-control
      block
      w-11/12
      px-3
      py-1.5
      text-base
      font-normal
      text-gray-700
      bg-transparent bg-clip-padding
      border border-solid border-gray-600
      rounded
      transition
      ease-in-out
      m-0
      focus:text-gray-700 focus:bg-transparent focus:border-blue-600 focus:outline-none"
        />
        <p className="pt-1.5">Gender</p>
        <input
          type="radio"
          name="gender"
          className=" form-control
      block
      w-1/2
      text-base
      font-normal
      text-gray-700
      bg-transparent bg-clip-padding
      border border-solid border-gray-600
      rounded
      transition
      ease-in-out
      focus:text-gray-700 focus:bg-transparent focus:border-blue-600 focus:outline-none"
        />
        <label for="Male">Male</label>
        <input
          type="radio"
          name="gender"
          className=" form-control
      block
      w-1/2
      px-3
      py-1.5
      text-base
      font-normal
      text-gray-700
      bg-transparent bg-clip-padding
      border border-solid border-gray-600
      rounded
      transition
      ease-in-out
      m-0
      focus:text-gray-700 focus:bg-transparent focus:border-blue-600 focus:outline-none"
        />
        <label for="Female">Female</label>
        <input
          type="radio"
          name="gender"
          className=" form-control
      block
      w-1/2
      px-3
      py-1.5
      text-base
      font-normal
      text-gray-700
      bg-transparent bg-clip-padding
      border border-solid border-gray-600
      rounded
      transition
      ease-in-out
      m-0
      focus:text-gray-700 focus:bg-transparent focus:border-blue-600 focus:outline-none"
        />
        <label for="Other">Other</label>
        <p className="pt-1.5">Date Of Birth</p>
        <input
          type="text"
          name="DOB"
          value={stdDetails.DOB}
          onChange={handleStdChange}
          className=" form-control
      block
      w-11/12
      px-3
      py-1.5
      text-base
      font-normal
      text-gray-700
      bg-transparent bg-clip-padding
      border border-solid border-gray-600
      rounded
      transition
      ease-in-out
      m-0
      focus:text-gray-700 focus:bg-transparent focus:border-blue-600 focus:outline-none"
        />
        <p className="pt-1.5">Age</p>
        <input
          type="text"
          name="Age"
          value={stdDetails.Age}
          onChange={handleStdChange}
          className=" form-control
      block
      w-11/12
      px-3
      py-1.5
      text-base
      font-normal
      text-gray-700
      bg-transparent bg-clip-padding
      border border-solid border-gray-600
      rounded
      transition
      ease-in-out
      m-0
      focus:text-gray-700 focus:bg-transparent focus:border-blue-600 focus:outline-none"
        />
        <p className="pt-1.5">Photograph (jpeg, jpg, png)</p>
        <input type="file" className="pt-1.5" onChange={handlePhotoChange} />
        <p className="pt-1.5">Are You Diffrently Abled?</p>
        <select
          name="Abled"
          value={stdDetails.Abled}
          onChange={handleStdChange}
          className=" form-control
      block
      w-11/12
      px-3
      py-1.5
      text-base
      font-normal
      text-gray-700
      bg-transparent bg-clip-padding
      border border-solid border-gray-600
      rounded
      transition
      ease-in-out
      m-0
      focus:text-gray-700 focus:bg-transparent focus:border-blue-600 focus:outline-none"
        >
          <option>select</option>
          <option>Yes</option>
          <option>No</option>
        </select>
        <p className="pt-1.5">Category</p>
        <select 
          name="Category"
          value={stdDetails.Category}
          onChange={handleStdChange}
          className=" form-control pt-1.5
      block
      w-11/12
      px-3
      py-1.5
      text-base
      font-normal
      text-gray-700
      bg-transparent bg-clip-padding
      border border-solid border-gray-600
      rounded
      transition
      ease-in-out
      m-0
      focus:text-gray-700 focus:bg-transparent focus:border-blue-600 focus:outline-none"
        >
          <option>select category</option>
          <option>Open</option>
          <option>EWS</option>
          <option>OBC-NCL</option>
          <option>SC</option>
          <option>ST</option>
          <option>Open-PWD</option>
          <option>EWS-PWD</option>
          <option>OBC NCL-PWD</option>
          <option>SC-PWD</option>
          <option>ST-PWD</option>
        </select>
        <p className="pt-1.5">Upload Document</p>
        <input className="pt-1.5" type="file" onChange={handleCertificateChange} />
        <p className="pt-1.5">Adhar Card No.</p>
        <input
          type="text"
          name="AadharNo"
          value={stdDetails.AadharNo}
          onChange={handleStdChange}
          className=" form-control
      block
      w-11/12
      px-3
      py-1.5
      text-base
      font-normal
      text-gray-700
      bg-transparent bg-clip-padding
      border border-solid border-gray-600
      rounded
      transition
      ease-in-out
      m-0
      focus:text-gray-700 focus:bg-transparent focus:border-blue-600 focus:outline-none"
        />
        <center>
          <h3 className="pt-1.5 text-bold" >Guardian Details</h3>
        </center>
        <p className="pt-1.5">Salutation</p>
        <select
          name="Salutation"
          value={GuardianDetails.Salutation}
          onChange={handleGuardChange}
          className=" form-control
      block
      w-11/12
      px-3
      py-1.5
      text-base
      font-normal
      text-gray-700
      bg-transparent bg-clip-padding
      border border-solid border-gray-600
      rounded
      transition
      ease-in-out
      m-0
      focus:text-gray-700 focus:bg-transparent focus:border-blue-600 focus:outline-none"
        >
          <option>Mr.</option>
          <option>Mrs.</option>
          <option value="2">Miss</option>
        </select>
        <p className="pt-1.5">Name</p>
        <input
          type="text"
          name="Name"
          value={GuardianDetails.Name}
          onChange={handleGuardChange}
          className=" form-control
      block
      w-11/12
      px-3
      py-1.5
      text-base
      font-normal
      text-gray-700
      bg-transparent bg-clip-padding
      border border-solid border-gray-600
      rounded
      transition
      ease-in-out
      m-0
      focus:text-gray-700 focus:bg-transparent focus:border-blue-600 focus:outline-none"
        />
        <p className="pt-1.5">Mobile Number</p>
        <input
          type="text"
          name="MobileNumber"
          value={GuardianDetails.MobileNumber}
          onChange={handleGuardChange}
          className=" form-control
      block
      w-11/12
      px-3
      py-1.5
      text-base
      font-normal
      text-gray-700
      bg-transparent bg-clip-padding
      border border-solid border-gray-600
      rounded
      transition
      ease-in-out
      m-0
      focus:text-gray-700 focus:bg-transparent focus:border-blue-600 focus:outline-none"
        />
        <p className="pt-1.5">Email</p>
        <input
          type="email"
          name="Email"
          value={GuardianDetails.Email}
          onChange={handleGuardChange}
          className=" form-control
      block
      w-11/12
      px-3
      py-1.5
      text-base
      font-normal
      text-gray-700
      bg-transparent bg-clip-padding
      border border-solid border-gray-600
      rounded
      transition
      ease-in-out
      m-0
      focus:text-gray-700 focus:bg-transparent focus:border-blue-600 focus:outline-none"
        />
        <p className="pt-1.5">Occupation</p>
        <input
          type="text"
          name="Occupation"
          value={GuardianDetails.Occupation}
          onChange={handleGuardChange}
          className=" form-control
      block
      w-11/12
      px-3
      py-1.5
      text-base
      font-normal
      text-gray-700
      bg-transparent bg-clip-padding
      border border-solid border-gray-600
      rounded
      transition
      ease-in-out
      m-0
      focus:text-gray-700 focus:bg-transparent focus:border-blue-600 focus:outline-none"
        />
        <p className="pt-1.5">Annual Income (In Rupees)</p>
        <input
          type="text"
          name="AnnualIncome"
          value={GuardianDetails.AnnualIncome}
          onChange={handleGuardChange}
          className=" form-control
      block
      w-11/12
      px-3
      py-1.5
      text-base
      font-normal
      text-gray-700
      bg-transparent bg-clip-padding
      border border-solid border-gray-600
      rounded
      transition
      ease-in-out
      m-0
      focus:text-gray-700 focus:bg-transparent focus:border-blue-600 focus:outline-none"
        />
        <button
          className="mb-14 mt-5  bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
          onClick={handleSubmit}
        >
          Save & next
        </button>
      </label>
      </form>
      </div>
   
      <Footer />
      </>
  );
}

export default BasicInfo;
