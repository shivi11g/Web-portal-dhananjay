import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../Footer";
import Header from "../Header";
import Nav from "./Nav";
function Experience() {
  const navigate = useNavigate();
  const [experience, setExperience] = useState({
    EmployerName: "",
    Industry: "",
    Designation: "",
    CurrentCTC: "",
    StartDate: "",
    EndDate: "",
    Responsibility: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setExperience(() => {
      return {
        ...experience,
        [name]: value,
      };
    });
    console.log(experience);
  };

  const handleSubmit = async () => {
    let result = await fetch("http://localhost:5000/mba/experience", {
      method: "post",
      body: JSON.stringify(experience),
      headers: {
        "content-Type": "application/json",
      },
    });
    result = await result.json();
    console.warn(result);
    navigate("/mba/academic-rewards");
  };

  return (
    <>
    <Header />
    
      <Nav />
      <div id="slide" className="mx-4 mb-4 pt-2 pb-10 bg-white px-30 py-15 shadow rounded-lg background border mt-4">
        <h1 className="text-center py-4 font-bold">Total Experience:</h1>
        <table className="mr-auto ml-auto mt-5">
          <tr>
            <td>
              <label for="Employer Name">Employer Name</label>
            </td>
            <td>
              <input
                type="text"
                name="EmployerName"
                value={experience.EmployerName}
                onChange={handleChange}
                placeholder="Employer Name"
                className=" form-control
      block
      w-1/2
      px-3
      py-1.5
      ml-3
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
            </td>
            <td>
              <label for="Industry">Industry</label>
            </td>
            <td>
              <input
                type="text"
                name="Industry"
                value={experience.Industry}
                onChange={handleChange}
                placeholder="Industry"
                className=" form-control
      block
      w-1/2
      px-3
      py-1.5
      ml-5
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
            </td>
          </tr>
          <tr>
            <td>
              <label for="Designation">Designation</label>
            </td>
            <td>
              <input
                type="text"
                name="Designation"
                value={experience.Designation}
                onChange={handleChange}
                placeholder="Designation"
                className=" form-control
      block
      w-1/2
      px-3
      py-1.5
      ml-3
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
            </td>
            <td>
              <label for="Current CTC">Current CTC</label>
            </td>
            <td>
              <input
                type="text"
                name="CurrentCTC"
                value={experience.CurrentCTC}
                onChange={handleChange}
                placeholder="Current CTC"
                className=" form-control
      block
      w-1/2
      px-3
      py-1.5
      ml-5
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
            </td>
          </tr>
          <tr>
            <td>
              <label for="Start Date">Start Date</label>
            </td>
            <td>
              <input
                type="text"
                name="StartDate"
                value={experience.StartDate}
                onChange={handleChange}
                placeholder="Start Date"
                className=" form-control
      block
      w-1/2
      px-3
      py-1.5
      ml-3
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
            </td>
            <td>
              <label for="End Date">End Date</label>
            </td>
            <td>
              <input
                type="text"
                name="EndDate"
                value={experience.EndDate}
                onChange={handleChange}
                placeholder="End Date"
                className=" form-control
      block
      w-1/2
      px-3
      py-1.5
      ml-5
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
            </td>
          </tr>
          <tr>
            <td>
              <label for="Responsibility">Responsibility</label>
            </td>
            <td>
              <input
                type="text"
                name="Responsibility"
                value={experience.Responsibility}
                onChange={handleChange}
                placeholder="Responsibility"
                className=" form-control
                block
                w-1/2
                px-3
                py-1.5
                ml-3
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
            </td>
          </tr>
         
        </table>
        <center> <button
            className=" mt-6 mb-0 bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded sm:w-40"
            onClick={handleSubmit}
          >
            Save & Next{" "}
          </button> </center>
      </div>
      <Footer />
    </>
  );
}

export default Experience;
