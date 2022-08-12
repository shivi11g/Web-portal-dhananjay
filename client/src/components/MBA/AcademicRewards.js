import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../Footer";
import Nav from "./Nav";
function AcademicRewards() {
  const navigate = useNavigate();

  const [rewards, setRewards] = useState({
    RewardDescription: "",
    Level: "",
    YearReceived: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRewards(() => {
      return {
        ...rewards,
        [name]: value,
      };
    });
  };

  const handleClick = async () => {
    let result = await fetch("http://localhost:5000/mba/rewards", {
      method: "post",
      body: JSON.stringify(rewards),
      headers: {
        "content-Type": "application/json",
      },
    });
    result = await result.json();
    console.warn(result);
    navigate("/mba/additional-info");
  };

  return (
    <>
      <Footer />
      <Nav />
      <div className=" mx-4  background border">
        <h1 className="text-center">Academics Rewards</h1>
        <table className="mr-auto ml-auto">
          <tr>
            <td>
              <label for="Reward Description">Reward Description</label>
            </td>
            <td>
              <input
                type="text"
                name="RewardDescription"
                value={rewards.RewardDescription}
                placeholder="Reward Description"
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
                onChange={handleChange}
              />
            </td>
            <td>
              <label for="Level">Level</label>
            </td>
            <td>
              <input
                type="text"
                name="Level"
                value={rewards.Level}
                placeholder="Level"
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
                onChange={handleChange}
              />
            </td>
          </tr>
          <tr>
            <td>
              <label for="Year Received">Year Received</label>
            </td>
            <td>
              <input
                type="text"
                name="YearReceived"
                value={rewards.YearReceived}
                placeholder="Year Received"
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
                onChange={handleChange}
              />
            </td>
          </tr>
          <button
            className="mb-4 bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded sm:w-40"
            onClick={handleClick}
          >
            Save & Next
          </button>
        </table>
      </div>
    </>
  );
}

export default AcademicRewards;
