import React from "react";
import { useState } from "react";
import Footer from "../Footer";
import Nav from "./Nav";
import axios from "axios";
import Header from "../Header";
import { useNavigate } from "react-router-dom";
function Education() {

  const navigate=useNavigate();
  const [secEdu, setSecEdu] = useState({
    Type: "",
    School: "",
    Board: "",
    PassingYear: "",
    Subjects: "",
    Result: "",
  });

  const [secEduFile, setSecFile] = useState("");

  const [highEdu, setHighEdu] = useState({
    Type: "",
    School: "",
    Board: "",
    PassingYear: "",
    Subjects: "",
    Result: "",
  });

  const [highEduFile, setHighFile] = useState("");

  const [BachEdu, setBachEdu] = useState({
    Degree: "",
    Specialization: "",
    DegreeType: "",
    StartYear: "",
    FinishYear: "",
    University: "",
    Result: "",
  });

  const [BachEduFile, setBachFile] = useState("");

  const [MasterEdu, setMasterEdu] = useState({
    Degree: "",
    Specialization: "",
    DegreeType: "",
    StartYear: "",
    FinishYear: "",
    University: "",
    Result: "",
  });

  const [MasterEduFile, setMasterFile] = useState("");

  const [DiplomaEdu, setDiplomaEdu] = useState({
    DiplomaType: "",
    Board: "",
    PassingYear: "",
    Result: "",
  });

  const [DiplomaEduFile, setDiplomaFile] = useState("");

  const handleSecChange = (e) => {
    const { name, value } = e.target;
    setSecEdu(() => {
      return {
        ...secEdu,
        [name]: value,
      };
    });
  };

  const handleSecFileChange = (e) => {
    setSecFile(e.target.files[0]);
  };

  const handleHighChange = (e) => {
    const { name, value } = e.target;
    setHighEdu(() => {
      return {
        ...highEdu,
        [name]: value,
      };
    });
  };

  const handleHighFileChange = (e) => {
    setHighFile(e.target.files[0]);
  };

  const handleBachChange = (e) => {
    const { name, value } = e.target;
    setBachEdu(() => {
      return {
        ...BachEdu,
        [name]: value,
      };
    });
  };

  const handleBachFileChange = (e) => {
    setBachFile(e.target.files[0]);
  };

  const handleMasterChange = (e) => {
    const { name, value } = e.target;
    setMasterEdu(() => {
      return {
        ...MasterEdu,
        [name]: value,
      };
    });
  };

  const handleMasterFileChange = (e) => {
    setMasterFile(e.target.files[0]);
  };

  const handleDiplomaChange = (e) => {
    const { name, value } = e.target;
    setDiplomaEdu(() => {
      return {
        ...DiplomaEdu,
        [name]: value,
      };
    });
  };

  const handleDiplomaFileChange = (e) => {
    setDiplomaFile(e.target.files[0]);
  };

  const handleSubmit = async () => {
    const resultData = await axios.post("http://localhost:5000/mba/education", {
      secEdu,
      highEdu,
      BachEdu,
      MasterEdu,
      DiplomaEdu,
    });
    console.log(resultData.data);

    const formDataSecFile = new FormData();
    formDataSecFile.append("file", secEduFile);

    try {
      const res1 = await axios.post(
        "http://localhost:5000/mba/uploads/sec-education",
        formDataSecFile,
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

    const formDataHighFile = new FormData();
    formDataHighFile.append("file", highEduFile);

    try {
      const res1 = await axios.post(
        "http://localhost:5000/mba/uploads/high-education",
        formDataHighFile,
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

    const formDataMasterFile = new FormData();
    formDataMasterFile.append("file", MasterEduFile);

    try {
      const res1 = await axios.post(
        "http://localhost:5000/mba/uploads/master-education",
        formDataMasterFile,
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

    const formDataBachFile = new FormData();
    formDataBachFile.append("file", BachEduFile);

    try {
      const res1 = await axios.post(
        "http://localhost:5000/mba/uploads/bach-education",
        formDataBachFile,
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

    const formDataDiplomaFile = new FormData();
    formDataDiplomaFile.append("file", DiplomaEduFile);

    try {
      const res1 = await axios.post(
        "http://localhost:5000/mba/uploads/diploma-education",
        formDataDiplomaFile,
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

    navigate("/mba/test-score");

  };

  return (
    <>
      <Header />
      <Nav />
      <div id="slide" className="mx-4 mb-4 background border pt-2 mt-4">
      <div className=" mx-4 background space-y-10 py-5 px-5">
        {/* <hr /> */}
        <div id="slide" className="mx-4 mb-4 pt-2 pb-10 bg-white px-30 py-15 shadow rounded-lg background border mt-4">
       <p className="text-black text-lg uppercase font-sans font-medium"> <center>Secondary Education</center></p>
        <table className=" mt-5 ml-auto mr-auto">
          <tr>
            <td>
              <label class="form-control-label py-3">Type</label>
            </td>
            <td>
              <select
                name="Type"
                value={secEdu.Type}
                onChange={handleSecChange}
                className=" form-control
      block
      w-1/2
      px-3
      py-1.5
      mb-1
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
                <option value="">Select</option>
                <option value="Full Time">Full Time</option>
                <option value="Part Time">Part Time</option>
              </select>
            </td>

            <td>
              <label for="name" className="mr-3">School/Institute Name</label>
            </td>
            <td>
              <input
                type="text"
                name="School"
                value={secEdu.School}
                onChange={handleSecChange}
                className=" form-control
      block
      w-1/2
      px-3
      py-1.5
      mb-1
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
              <label for="name">Board</label>
            </td>
            <td>
              <input
                type="text"
                name="Board"
                value={secEdu.Board}
                onChange={handleSecChange}
                className=" form-control
      block
      w-1/2
      px-3
      py-1.5
      mb-1
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
              <label class="form-control-label">Passing Year</label>
            </td>
            <td>
              <select
                name="PassingYear"
                value={secEdu.PassingYear}
                onChange={handleSecChange}
                className=" form-control
      block
      w-1/2
      px-3
      py-1.5
      mb-1
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
                <option value="">select</option>
                <option value="2022">2022</option>
                <option value="2021">2021</option>
                <option value="2020">2020</option>
                <option value="2019">2019</option>
                <option value="2018">2018</option>
                <option value="2017">2017</option>
                <option value="2016">2016</option>
                <option value="2015">2015</option>
                <option value="2014">2014</option>
                <option value="2013">2013</option>
                <option value="2012">2012</option>
                <option value="2011">2011</option>
                <option value="2010">2010</option>
                <option value="2009">2009</option>
                <option value="2008">2008</option>
                <option value="2007">2007</option>
                <option value="2006">2006</option>
                <option value="2005">2005</option>
                <option value="2004">2004</option>
                <option value="2003">2003</option>
                <option value="2002">2002</option>
                <option value="2001">2001</option>
                <option value="2000">2000</option>
                <option value="1999">1999</option>
                <option value="1998">1998</option>
                <option value="1997">1997</option>
                <option value="1996">1996</option>
                <option value="1995">1995</option>
                <option value="1994">1994</option>
                <option value="1993">1993</option>
                <option value="1992">1992</option>
                <option value="1991">1991</option>
                <option value="1990">1990</option>
                <option value="1989">1989</option>
                <option value="1988">1988</option>
                <option value="1987">1987</option>
                <option value="1986">1986</option>
                <option value="1985">1985</option>
                <option value="1984">1984</option>
                <option value="1983">1983</option>
                <option value="1982">1982</option>
                <option value="1981">1981</option>
                <option value="1980">1980</option>
                <option value="1979">1979</option>
                <option value="1978">1978</option>
                <option value="1977">1977</option>
                <option value="1976">1976</option>
                <option value="1975">1975</option>
                <option value="1974">1974</option>
                <option value="1973">1973</option>
                <option value="1972">1972</option>
                <option value="1971">1971</option>
                <option value="1970">1970</option>
              </select>
            </td>
          </tr>
          <tr>
            <td>
              <label for="name">Subjects</label>
            </td>
            <td>
              <input
                type="text"
                name="Subjects"
                value={secEdu.Subjects}
                onChange={handleSecChange}
                className=" form-control
      block
      w-1/2
      px-3
      py-1.5
      mb-1
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
              <label for="name">Result(% or CGPA)</label>
            </td>
            <td>
              <input
                type="number"
                name="result"
                value={secEdu.Result}
                onChange={handleSecChange}
                className=" form-control
      block
      w-1/2
      px-3
      py-1.5
      mb-1
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
              <label for="name">Upload Marksheet</label>
            </td>
            <td>
              <input
                type="file"
                name="secEduFile"
                onChange={handleSecFileChange}
              />
            </td>
          </tr>
        </table>
        </div>
        <div id="slide" className="mx-4 mb-4 pt-2 pb-10 bg-white px-30 py-15 shadow rounded-lg background border mt-4">
        <center>
        
        {/* </div> */}
        
       
        <p className="text-black text-lg uppercase font-sans font-medium">HIGHER SECONDARY</p>
        </center>
        <table className="mt-5 mr-auto ml-auto">
          <tr>
            <td>
              <label class="form-control-label">Type</label>
            </td>
            <td>
              <select
                name="Type"
                value={highEdu.Type}
                onChange={handleHighChange}
                className=" form-control
      block
      w-1/2
      px-3
      py-1.5
      mb-1
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
                <option value="">Select</option>
                <option value="Full Time">Full Time</option>
                <option value="Part Time">Part Time</option>
              </select>
            </td>
            <td>
              <label for="name" className="mr-3">School/Institute Name</label>
            </td>
            <td>
              <input
                type="text"
                name="School"
                value={highEdu.School}
                onChange={handleHighChange}
                className=" form-control
      block
      w-1/2
      px-3
      py-1.5
      mb-1
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
              <label for="name">Board</label>
            </td>
            <td>
              <input
                type="text"
                name="Board"
                value={highEdu.Board}
                onChange={handleHighChange}
                className=" form-control
      block
      w-1/2
      px-3
      py-1.5
      mb-1
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
              <label class="form-control-label">Passing Year</label>
            </td>
            <td>
              <select
                name="PassingYear"
                value={highEdu.PassingYear}
                onChange={handleHighChange}
                className=" form-control
      block
      w-1/2
      px-3
      py-1.5
      mb-1
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
                <option value="">select</option>
                <option value="2022">2022</option>
                <option value="2021">2021</option>
                <option value="2020">2020</option>
                <option value="2019">2019</option>
                <option value="2018">2018</option>
                <option value="2017">2017</option>
                <option value="2016">2016</option>
                <option value="2015">2015</option>
                <option value="2014">2014</option>
                <option value="2013">2013</option>
                <option value="2012">2012</option>
                <option value="2011">2011</option>
                <option value="2010">2010</option>
                <option value="2009">2009</option>
                <option value="2008">2008</option>
                <option value="2007">2007</option>
                <option value="2006">2006</option>
                <option value="2005">2005</option>
                <option value="2004">2004</option>
                <option value="2003">2003</option>
                <option value="2002">2002</option>
                <option value="2001">2001</option>
                <option value="2000">2000</option>
                <option value="1999">1999</option>
                <option value="1998">1998</option>
                <option value="1997">1997</option>
                <option value="1996">1996</option>
                <option value="1995">1995</option>
                <option value="1994">1994</option>
                <option value="1993">1993</option>
                <option value="1992">1992</option>
                <option value="1991">1991</option>
                <option value="1990">1990</option>
                <option value="1989">1989</option>
                <option value="1988">1988</option>
                <option value="1987">1987</option>
                <option value="1986">1986</option>
                <option value="1985">1985</option>
                <option value="1984">1984</option>
                <option value="1983">1983</option>
                <option value="1982">1982</option>
                <option value="1981">1981</option>
                <option value="1980">1980</option>
                <option value="1979">1979</option>
                <option value="1978">1978</option>
                <option value="1977">1977</option>
                <option value="1976">1976</option>
                <option value="1975">1975</option>
                <option value="1974">1974</option>
                <option value="1973">1973</option>
                <option value="1972">1972</option>
                <option value="1971">1971</option>
                <option value="1970">1970</option>
              </select>
            </td>
          </tr>
          <tr>
            <td>
              <label for="name">Subjects</label>
            </td>
            <td>
              <input
                type="text"
                name="Subjects"
                value={highEdu.Subjects}
                onChange={handleHighChange}
                className=" form-control
      block
      w-1/2
      px-3
      py-1.5
      mb-1
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
              <label for="name">Result(% or CGPA)</label>
            </td>
            <td>
              <input
                type="number"
                name="Result"
                value={highEdu.Result}
                onChange={handleHighChange}
                className=" form-control
      block
      w-1/2
      px-3
      py-1.5
      mb-1
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
              <label for="name">Upload Marksheet</label>
            </td>
            <td>
              <input
                type="file"
                name="HigherMarksheet"
                onChange={handleHighFileChange}
              />
            </td>
          </tr>
        </table>
        </div>
        
        <div id="slide" className="mx-4 mb-4 pt-2 pb-10 bg-white px-30 py-15 shadow rounded-lg background border mt-4">
        <center>
        <p className="text-black text-lg uppercase font-sans font-medium">BACHLOR'S</p>
        </center>
        <table className=" mr-auto mt-3 ml-auto">
          <tr>
            <td>
              <label for="name">Degree</label>
            </td>
            <td>
              <select
                name="Degree"
                value={BachEdu.Degree}
                onChange={handleBachChange}
                className=" form-control
      block
      w-1/2
      px-3
      py-1.5
      mb-1
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
                <option value="">Select</option>
                <option value="B.SC">Bachelor of Science(B.Sc.)</option>
                <option value="BCA">
                  Bachelors of Computer Application(BCA)
                </option>
                <option value="BBA">
                  Bachelors of Business Administration(BBA)
                </option>
                <option value="BMS">
                  Bachelors of Managenment Studies(BMS)
                </option>
                <option value="B.Arc">Bachelor of Architecture</option>
                <option value="B.E">Bachelor of Engineering</option>
                <option value="B.Com">Bachelor of Commerce(B.Com)</option>
                <option value="B.Sc Agriculture">
                  Bachelor of Agriculture (B.Sc. (Agriculture))
                </option>
                <option value="B.A">Bachelor of Arts (B.A.)</option>
                <option value="B.Sc. Computer Science">
                  Bachelor of Computer Science (B.Sc. (Computer Science))
                </option>
                <option value="B.Tech">Bachelor of Technology (B.Tech.)</option>
                <option value="BFA">Bachelor of Fine Arts (BFA)</option>
                <option value="B.Sc.Home Science">
                  Bachelor of Home Science (B.Sc. (Home Science))
                </option>
                <option value="B.Lib">Bachelor of Library(B.Lib)</option>
                <option value="B.M.C">
                  Bachelor of Mass Communications(B.M.C)
                </option>
                <option value="BSW">Bachelor of Social Work (BSW)</option>
                <option value="B.Pharm">Bachelor of Pharmacy (B.Pharm)</option>
              </select>
            </td>
            <td>
              <label for="name">Specialization</label>
            </td>
            <td>
              <select
                name="Specialization"
                value={BachEdu.Specialization}
                onChange={handleBachChange}
                className=" form-control
      block
      w-1/2
      px-3
      py-1.5
      mb-1
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
                <option value="">select specialization</option>
                <option value="others">others</option>
              </select>
            </td>
          </tr>
          <tr>
            <td>
              <label for="name">Degree Type</label>
            </td>
            <td>
              <select
                name="DegreeType"
                value={BachEdu.DegreeType}
                onChange={handleBachChange}
                className=" form-control
      block
      w-1/2
      px-3
      py-1.5
      mb-1
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
                <option value="">Select</option>
                <option value="Full Time">Full Time</option>
                <option value="Part Time">Part Time</option>
              </select>
            </td>
            <td>
              <label for="name">Start Year</label>
            </td>
            <td>
              <select
                name="StartYear"
                value={BachEdu.StartYear}
                onChange={handleBachChange}
                className=" form-control
      block
      w-1/2
      px-3
      py-1.5
      mb-1
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
                <option value="">Select</option>
                <option value="2022">2022</option>
                <option value="2021">2021</option>
                <option value="2020">2020</option>
                <option value="2019">2019</option>
                <option value="2018">2018</option>
                <option value="2017">2017</option>
                <option value="2016">2016</option>
                <option value="2015">2015</option>
                <option value="2014">2014</option>
                <option value="2013">2013</option>
                <option value="2012">2012</option>
                <option value="2011">2011</option>
                <option value="2010">2010</option>
                <option value="2009">2009</option>
                <option value="2008">2008</option>
                <option value="2007">2007</option>
                <option value="2006">2006</option>
                <option value="2005">2005</option>
                <option value="2004">2004</option>
                <option value="2003">2003</option>
                <option value="2002">2002</option>
                <option value="2001">2001</option>
                <option value="2000">2000</option>
                <option value="1999">1999</option>
                <option value="1998">1998</option>
                <option value="1997">1997</option>
                <option value="1996">1996</option>
                <option value="1995">1995</option>
                <option value="1994">1994</option>
                <option value="1993">1993</option>
                <option value="1992">1992</option>
                <option value="1991">1991</option>
                <option value="1990">1990</option>
                <option value="1989">1989</option>
                <option value="1988">1988</option>
                <option value="1987">1987</option>
                <option value="1986">1986</option>
                <option value="1985">1985</option>
                <option value="1984">1984</option>
                <option value="1983">1983</option>
                <option value="1982">1982</option>
                <option value="1981">1981</option>
                <option value="1980">1980</option>
                <option value="1979">1979</option>
                <option value="1978">1978</option>
                <option value="1977">1977</option>
                <option value="1976">1976</option>
                <option value="1975">1975</option>
                <option value="1974">1974</option>
                <option value="1973">1973</option>
                <option value="1972">1972</option>
                <option value="1971">1971</option>
                <option value="1970">1970</option>
              </select>
            </td>
          </tr>
          <tr>
            <td>
              <label for="name">Finish Year</label>
            </td>
            <td>
              <select
                name="FinishYear"
                value={BachEdu.FinishYear}
                onChange={handleBachChange}
                className=" form-control
      block
      w-1/2
      px-3
      py-1.5
      mb-1
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
                <option value="">Select</option>
                <option value="2027">2027</option>
                <option value="2026">2026</option>
                <option value="2025">2025</option>
                <option value="2024">2024</option>
                <option value="2023">2023</option>
                <option value="2022">2022</option>
                <option value="2021">2021</option>
                <option value="2020">2020</option>
                <option value="2019">2019</option>
                <option value="2018">2018</option>
                <option value="2017">2017</option>
                <option value="2016">2016</option>
                <option value="2015">2015</option>
                <option value="2014">2014</option>
                <option value="2013">2013</option>
                <option value="2012">2012</option>
                <option value="2011">2011</option>
                <option value="2010">2010</option>
                <option value="2009">2009</option>
                <option value="2008">2008</option>
                <option value="2007">2007</option>
                <option value="2006">2006</option>
                <option value="2005">2005</option>
                <option value="2004">2004</option>
                <option value="2003">2003</option>
                <option value="2002">2002</option>
                <option value="2001">2001</option>
                <option value="2000">2000</option>
                <option value="1999">1999</option>
                <option value="1998">1998</option>
                <option value="1997">1997</option>
                <option value="1996">1996</option>
                <option value="1995">1995</option>
                <option value="1994">1994</option>
                <option value="1993">1993</option>
                <option value="1992">1992</option>
                <option value="1991">1991</option>
                <option value="1990">1990</option>
                <option value="1989">1989</option>
                <option value="1988">1988</option>
                <option value="1987">1987</option>
                <option value="1986">1986</option>
                <option value="1985">1985</option>
                <option value="1984">1984</option>
                <option value="1983">1983</option>
                <option value="1982">1982</option>
                <option value="1981">1981</option>
                <option value="1980">1980</option>
                <option value="1979">1979</option>
                <option value="1978">1978</option>
                <option value="1977">1977</option>
                <option value="1976">1976</option>
                <option value="1975">1975</option>
                <option value="1974">1974</option>
                <option value="1973">1973</option>
                <option value="1972">1972</option>
                <option value="1971">1971</option>
                <option value="1970">1970</option>
              </select>
            </td>
          </tr>
          <tr>
            <td>
              <label for="name">University</label>
            </td>
            <td>
              <input
                type="text"
                name="University"
                value={BachEdu.University}
                onChange={handleBachChange}
                className=" form-control
      block
      w-1/2
      px-3
      py-1.5
      mb-1
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
              <label for="name">Result(% or CGPA)</label>
            </td>
            <td>
              <input
                type="number"
                name="Result"
                value={BachEdu.Result}
                onChange={handleBachChange}
                className=" form-control
      block
      w-1/2
      px-3
      py-1.5
      mb-1
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
              <label for="name">Upload Marksheet</label>
            </td>
            <td>
              <input
                type="file"
                name="BachlorMarksheet"
                onChange={handleBachFileChange}
              />
            </td>
          </tr>
        </table>
        </div>
      
    
       
        <div id="slide" className="mx-4 mb-4 pt-2 pb-10 bg-white px-30 py-15 shadow rounded-lg background border mt-4">
        <center>
       
        <p className="text-black text-lg uppercase font-sans font-medium">MASTERS</p>
        </center>
        <table className="mr-auto mt-3 ml-auto">
          <tr>
            <td>
              <label for="name">Degree</label>
            </td>
            <td>
              <select
                name="Degree"
                value={MasterEdu.Degree}
                onChange={handleMasterChange}
                className=" form-control
      block
      w-1/2
      px-3
      py-1.5
      mb-1
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
                <option value="">Select</option>
                <option value="MBA">
                  Masters of Business Administration(MBA)
                </option>
                <option value="PGDM">
                  Post Graduate Diploma in Management(PGDM)
                </option>
                <option value="PGP">Post Graduate Program(PGP)</option>
                <option value="M.TECH">Masters of Technology(M. Tech.)</option>
                <option value="ME">Masters of Engineering(M.E.)</option>
                <option value="MS">Masters of Science (M.S.)</option>
                <option value="M.SC">Masters of Science (M.Sc.)</option>
                <option value="MCA">
                  Masters of Computer Application(MCA)
                </option>
                <option value="PGDIE">
                  Post Graduate Diploma in Industrial Engineering
                </option>
                <option value="M.Arch">Master of Architecture (M.Arch.)</option>
                <option value="M.Com">Master of Commerce (M.Com.)</option>
                <option value="MFA">Master of Fine Arts (MFA)</option>
                <option value="M.Lib">Master of Library (M.Lib)</option>
                <option value="M.M.C">
                  Master of Mass Communications (M.M.C)
                </option>
                <option value="M.Sc.Agriculture">
                  Master of Science in Agriculture (M.Sc. (Agriculture))
                </option>
                <option value="M.S.W.">Master of Social Work (M.S.W.)</option>
                <option value="M.M.S">
                  Masters of Management Studies (M.M.S.)
                </option>
                <option value="Pharm.D">Doctor of Pharmacy (Pharm.D)</option>
                <option value="Master of Philosophy">
                  Master of Philosophy
                </option>
                <option value="Master of Science">Master of Science</option>
                <option value="Master of Technology">
                  Master of Technology
                </option>
                <option value="M.Pharm">Masters of Pharmacy (M.Pharm)</option>
              </select>
            </td>
            <td>
              <label for="name">Specialization</label>
            </td>
            <td>
              <select
                name="Specialization"
                value={MasterEdu.Specialization}
                onChange={handleMasterChange}
                className=" form-control
      block
      w-1/2
      px-3
      py-1.5
      mb-1
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
                <option value="">select specialization</option>
                <option value="others">others</option>
              </select>
            </td>
          </tr>
          <tr>
            <td>
              <label for="name">Degree Type</label>
            </td>
            <td>
              <select
                name="DegreeType"
                value={MasterEdu.DegreeType}
                onChange={handleMasterChange}
                className=" form-control
      block
      w-1/2
      px-3
      py-1.5
      mb-1
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
                <option value="">Select</option>
                <option value="Full Time">Full Time</option>
                <option value="Part Time">Part Time</option>
              </select>
            </td>
            <td>
              <label for="name">Start Year</label>
            </td>
            <td>
              <select
                name="FromYear"
                value={MasterEdu.StartYear}
                onChange={handleMasterChange}
                className=" form-control
      block
      w-1/2
      px-3
      py-1.5
      mb-1
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
                <option value="">Select</option>
                <option value="2022">2022</option>
                <option value="2021">2021</option>
                <option value="2020">2020</option>
                <option value="2019">2019</option>
                <option value="2018">2018</option>
                <option value="2017">2017</option>
                <option value="2016">2016</option>
                <option value="2015">2015</option>
                <option value="2014">2014</option>
                <option value="2013">2013</option>
                <option value="2012">2012</option>
                <option value="2011">2011</option>
                <option value="2010">2010</option>
                <option value="2009">2009</option>
                <option value="2008">2008</option>
                <option value="2007">2007</option>
                <option value="2006">2006</option>
                <option value="2005">2005</option>
                <option value="2004">2004</option>
                <option value="2003">2003</option>
                <option value="2002">2002</option>
                <option value="2001">2001</option>
                <option value="2000">2000</option>
                <option value="1999">1999</option>
                <option value="1998">1998</option>
                <option value="1997">1997</option>
                <option value="1996">1996</option>
                <option value="1995">1995</option>
                <option value="1994">1994</option>
                <option value="1993">1993</option>
                <option value="1992">1992</option>
                <option value="1991">1991</option>
                <option value="1990">1990</option>
                <option value="1989">1989</option>
                <option value="1988">1988</option>
                <option value="1987">1987</option>
                <option value="1986">1986</option>
                <option value="1985">1985</option>
                <option value="1984">1984</option>
                <option value="1983">1983</option>
                <option value="1982">1982</option>
                <option value="1981">1981</option>
                <option value="1980">1980</option>
                <option value="1979">1979</option>
                <option value="1978">1978</option>
                <option value="1977">1977</option>
                <option value="1976">1976</option>
                <option value="1975">1975</option>
                <option value="1974">1974</option>
                <option value="1973">1973</option>
                <option value="1972">1972</option>
                <option value="1971">1971</option>
                <option value="1970">1970</option>
              </select>
            </td>
          </tr>
          <tr>
            <td>
              <label for="name">Finish Year</label>
            </td>
            <td>
              <select
                name="FinishYear"
                value={MasterEdu.FinishYear}
                onChange={handleMasterChange}
                className=" form-control
      block
      w-1/2
      px-3
      py-1.5
      mb-1
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
                <option value="">Select</option>
                <option value="2027">2027</option>
                <option value="2026">2026</option>
                <option value="2025">2025</option>
                <option value="2024">2024</option>
                <option value="2023">2023</option>
                <option value="2022">2022</option>
                <option value="2021">2021</option>
                <option value="2020">2020</option>
                <option value="2019">2019</option>
                <option value="2018">2018</option>
                <option value="2017">2017</option>
                <option value="2016">2016</option>
                <option value="2015">2015</option>
                <option value="2014">2014</option>
                <option value="2013">2013</option>
                <option value="2012">2012</option>
                <option value="2011">2011</option>
                <option value="2010">2010</option>
                <option value="2009">2009</option>
                <option value="2008">2008</option>
                <option value="2007">2007</option>
                <option value="2006">2006</option>
                <option value="2005">2005</option>
                <option value="2004">2004</option>
                <option value="2003">2003</option>
                <option value="2002">2002</option>
                <option value="2001">2001</option>
                <option value="2000">2000</option>
                <option value="1999">1999</option>
                <option value="1998">1998</option>
                <option value="1997">1997</option>
                <option value="1996">1996</option>
                <option value="1995">1995</option>
                <option value="1994">1994</option>
                <option value="1993">1993</option>
                <option value="1992">1992</option>
                <option value="1991">1991</option>
                <option value="1990">1990</option>
                <option value="1989">1989</option>
                <option value="1988">1988</option>
                <option value="1987">1987</option>
                <option value="1986">1986</option>
                <option value="1985">1985</option>
                <option value="1984">1984</option>
                <option value="1983">1983</option>
                <option value="1982">1982</option>
                <option value="1981">1981</option>
                <option value="1980">1980</option>
                <option value="1979">1979</option>
                <option value="1978">1978</option>
                <option value="1977">1977</option>
                <option value="1976">1976</option>
                <option value="1975">1975</option>
                <option value="1974">1974</option>
                <option value="1973">1973</option>
                <option value="1972">1972</option>
                <option value="1971">1971</option>
                <option value="1970">1970</option>
              </select>
            </td>
          </tr>
          <tr>
            <td>
              <label for="name">University</label>
            </td>

            <td>
              <input
                type="text"
                name="University"
                value={MasterEdu.University}
                onChange={handleMasterChange}
                className=" form-control
      block
      w-1/2
      px-3
      py-1.5
      mb-1
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
              <label for="name">Result(% or CGPA)</label>
            </td>
            <td>
              <input
                type="number"
                name="Result"
                value={MasterEdu.Result}
                onChange={handleMasterChange}
                className=" form-control
      block
      w-1/2
      px-3
      py-1.5
      mb-1
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
              <label for="name">Upload Marksheet</label>
            </td>
            <td>
              <input
                type="file"
                name="MasterMarksheet"
                onChange={handleMasterFileChange}
              />
            </td>
          </tr>
        </table>
        </div>
        
        <div id="slide" className="mx-4 mb-4 pt-2 pb-10 bg-white px-30 py-15 shadow rounded-lg background border mt-4">
        <center>
        <p className="text-black text-lg uppercase font-sans font-medium">DIPLOMA</p>
        </center>
        <table className="mr-auto mt-3 ml-auto">
          <tr>
            <td>
              <label for="name">Diploma Type</label>
            </td>
            <td>
              <select
                name="DiplomaType"
                value={DiplomaEdu.DiplomaType}
                onChange={handleDiplomaChange}
                className=" form-control
                block
      w-1/2
      px-3
      py-1.5
      mb-1
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
                <option value="">-- Select --</option>
                <option value="Full Time">Full Time</option>
                <option value="Part Time">Part Time</option>
              </select>
            </td>
            <td>
              <label for="name">Passing Year</label>
            </td>
            <td>
              <select
                name="PassingYear"
                value={DiplomaEdu.PassingYear}
                onChange={handleDiplomaChange}
                className=" form-control
                block
      w-1/2
      px-3
      py-1.5
      mb-1
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
                <option value="">select</option>
                <option value="2027">2027</option>
                <option value="2026">2026</option>
                <option value="2025">2025</option>
                <option value="2024">2024</option>
                <option value="2023">2023</option>
                <option value="2022">2022</option>
                <option value="2021">2021</option>
                <option value="2020">2020</option>
                <option value="2019">2019</option>
                <option value="2018">2018</option>
                <option value="2017">2017</option>
                <option value="2016">2016</option>
                <option value="2015">2015</option>
                <option value="2014">2014</option>
                <option value="2013">2013</option>
                <option value="2012">2012</option>
                <option value="2011">2011</option>
                <option value="2010">2010</option>
                <option value="2009">2009</option>
                <option value="2008">2008</option>
                <option value="2007">2007</option>
                <option value="2006">2006</option>
                <option value="2005">2005</option>
                <option value="2004">2004</option>
                <option value="2003">2003</option>
                <option value="2002">2002</option>
                <option value="2001">2001</option>
                <option value="2000">2000</option>
                <option value="1999">1999</option>
                <option value="1998">1998</option>
                <option value="1997">1997</option>
                <option value="1996">1996</option>
                <option value="1995">1995</option>
                <option value="1994">1994</option>
                <option value="1993">1993</option>
                <option value="1992">1992</option>
                <option value="1991">1991</option>
                <option value="1990">1990</option>
                <option value="1989">1989</option>
                <option value="1988">1988</option>
                <option value="1987">1987</option>
                <option value="1986">1986</option>
                <option value="1985">1985</option>
                <option value="1984">1984</option>
                <option value="1983">1983</option>
                <option value="1982">1982</option>
                <option value="1981">1981</option>
                <option value="1980">1980</option>
                <option value="1979">1979</option>
                <option value="1978">1978</option>
                <option value="1977">1977</option>
                <option value="1976">1976</option>
                <option value="1975">1975</option>
                <option value="1974">1974</option>
                <option value="1973">1973</option>
                <option value="1972">1972</option>
                <option value="1971">1971</option>
                <option value="1970">1970</option>
              </select>
            </td>
          </tr>
          <tr>
            <td>
              <label for="name">Board</label>
            </td>
            <td>
              <input
                type="text"
                name="Board"
                value={DiplomaEdu.Board}
                onChange={handleDiplomaChange}
                className=" form-control
                block
      w-1/2
      px-3
      py-1.5
      mb-1
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
              <label for="name">Upload Marksheet</label>
            </td>
            <td>
              <input
                type="file"
                name="DiplomaMarksheet"
                onChange={handleDiplomaFileChange}
              />
            </td>
            
    
          </tr>
          <tr>
            <td>
              <label for="name">Result(% or CGPA)</label>
            </td>
            <td>
              <input
                type="number"
                name="Result"
                value={DiplomaEdu.Result}
                onChange={handleDiplomaChange}
                className=" form-control
                block
      w-1/2
      px-3
      py-1.5
      mb-1
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
        </div>
      
        <br />
       <center> <button
          className=" mb-4 bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
          onClick={handleSubmit}
        >
          Save & next
        </button></center>
      </div>
      </div>
      <hr />
      <Footer/>
    </>
  );
}

export default Education;
