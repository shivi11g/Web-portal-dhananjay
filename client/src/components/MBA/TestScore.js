import React, { useState } from "react";
import Footer from "../Footer";
import Nav from "./Nav";
import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom";
import Header from "../Header";
function TestScore() {
  const navigate = useNavigate();
  const [testScore, setTestScore] = useState({
    ExamName: "",
    RollNumber: "",
    ExamMonthYear: "",
    ResultStatus: "",
    RankScore: "",
    Percentile: "",
    user_id: localStorage.getItem("user"),
  });
  const [file, setFile] = useState("");

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTestScore(() => {
      return {
        ...testScore,
        [name]: value,
      };
    });
    console.log(testScore);
  };

  const onSubmit = async (e) => {
    const res2 = await axios.post(
      "http://localhost:5000/mba/test-score",
      testScore
    );
    console.log(res2.data);

    const formDataFile = new FormData();
    formDataFile.append("file", file);

    try {
      const res1 = await axios.post(
        "http://localhost:5000/mba/uploads/test-score",
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

    navigate("/mba/experience");
  };

  return (
    <>
       <Header />
      
      <Nav />
      <div id="slide" className="mx-4 my-20 pt-2 pb-10 bg-white px-30 py-15 shadow rounded-lg background border mt-4">
        <h1 className="text-center py-4 font-bold">Test-Score</h1>

        <table className=" mt-6 mr-auto ml-auto">
          <tr>
            <td>
              <label for="name">Exam Name</label>
            </td>
            <td>
              <select
                name="ExamName"
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
                value={testScore.ExamName}
                onChange={handleChange}
              >
                <option value="">Select Exam</option>
                <option value="GATE">GATE</option>
                <option value="CSIR">CSIR</option>
                <option value="UGC-NET">UGC-NET</option>
                <option value="DAE">DAE</option>
                <option value="NBHM">NBHM</option>
                <option value="DST">DST</option>
                <option value="DBT">DBT</option>
                <option value="ICMR">ICMR</option>
                <option value="Other">Other</option>
              </select>
            </td>
            <td>
              <label for="name">Roll Number</label>
            </td>
            <td>
              <input
                type="text"
                name="RollNumber"
                placeholder="Roll Number"
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
                value={testScore.RollNumber}
                onChange={handleChange}
              />
            </td>
          </tr>
          <tr>
            <td>
              <label for="name">Exam Month Year</label>
            </td>
            <td>
              <input
                type="text"
                name="ExamMonthYear"
                placeholder="Exam Month Year"
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
                value={testScore.ExamMonthYear}
                onChange={handleChange}
              />
            </td>
            <td>
              <label for="name">Result Status</label>
            </td>
            <td>
              <input
                type="text"
                name="ResultStatus"
                placeholder="Result Status"
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
                value={testScore.ResultStatus}
                onChange={handleChange}
              />
            </td>
          </tr>
          <tr>
            <td>
              <label for="name">Rank Score</label>
            </td>
            <td>
              <input
                type="text"
                name="RankScore"
                placeholder="Rank Score"
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
                value={testScore.RankScore}
                onChange={handleChange}
              />
            </td>
            <td>
              <label for="name">Percentile</label>
            </td>
            <td>
              <input
                type="text"
                name="Percentile"
                placeholder="Percentile"
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
                value={testScore.Percentile}
                onChange={handleChange}
              />
            </td>
          </tr>
          <tr>
            <td>
              <label for="name">Upload</label>
            </td>
            <td>
              <input
                type="file"
                name="ExtranceExamUpload"
                onChange={handleFileChange}
              />
            </td>
          </tr>
          {/* <button className="mb-4 bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded" onClick={handleClick}>Save&next</button> */}

          
        </table>
        <center><button
            onClick={onSubmit}
            className="mb-0 mt-10 bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
          >
            Upload
          </button></center>
      </div>
      <Footer />
    </>
  );
}

export default TestScore;
