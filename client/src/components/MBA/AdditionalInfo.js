import React, { useState } from "react";
import axios from "axios";
import Footer from "../Footer";
import Nav from "./Nav";
import { useNavigate } from "react-router-dom";
import Header from "../Header";
function AdditionalInfo() {
  const navigate = useNavigate();
  const [info, setInfo] = useState({
    VideoCV: "",
    Linkedin: "",
  });
  const [resume, setResume] = useState("");

  const handleInfoChange = (e) => {
    const { name, value } = e.target;
    setInfo(() => {
      return {
        ...info,
        [name]: value,
      };
    });
  };

  const handleResumeChange = (e) => {
    setResume(e.target.files[0]);
  };

  const handleClick = async () => {
    const resultData = await axios.post(
      "http://localhost:5000/mba/additionalInfo",
      info
    );
    console.log(resultData.data);

    const formDataFile = new FormData();
    formDataFile.append("file", resume);

    try {
      const res1 = await axios.post(
        "http://localhost:5000/mba/uploads/additionalInfo",
        formDataFile,
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
    alert(
      `Your Forms have been submitted \n This is your unique id :${localStorage.getItem(
        "user"
      )}`
    );
    navigate("/mba");
  };

  return (
    <>
      <Header />
      <Nav />
      <div id="slide" className=" flex flex-col justify-center items-center mx-4 mb-4 pt-2 pb-10 bg-white px-30 py-15 shadow rounded-lg background border mt-4">
        <p className="my-3">Video CV</p>
        <input
          type="text"
          name="VideoCV"
          value={info.VideoCV}
          onChange={handleInfoChange}
          placeholder="Enter Youtube video url"
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

        <p className="my-3">Linkedin</p>
        <input
          type="text"
          name="Linkedin"
          value={info.Linkedin}
          onChange={handleInfoChange}
          placeholder="Enter Linkedin profile link"
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
       <div className="w-1/2">
        <p className="mt-2 text-left mb-2">Resume (docx,doc,pdf)*</p>
        <input type="file" onChange={handleResumeChange} />

       <center> <button
          className="block mb-0 mt-9 bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded "
          onClick={handleClick}
        >
          Save & Next
        </button> </center>
      </div>
      </div>
      <Footer />
    </>
  );
}

export default AdditionalInfo;
