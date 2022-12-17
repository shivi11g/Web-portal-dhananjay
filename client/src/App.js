import './App.css';
import React from 'react';
import Login from './components/Login/Login';
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import TestScore from './components/MBA/TestScore';
import Education from './components/MBA/Education';
import Contact from './components/MBA/Contact';
import BasicInfo from './components/MBA/BasicInfo';
import AdditionalInfo from './components/MBA/AdditionalInfo';
import AcademicRewards from './components/MBA/AcademicRewards';
import Experience from './components/MBA/Experience';
import Template from './components/MBA/Template';
import PrivateComponent from './components/PrivateComponent';
function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login/>}/>

      <Route element={<PrivateComponent/>}>
      <Route path='/mba' element={<Template />}/>
      <Route path='/mba/test-score' element={<TestScore/>}/>
      <Route path='/mba/education' element={<Education/>}/>
      <Route path='/mba/contact'  element={<Contact/>}/>
      <Route path='/mba/basic-info' element={<BasicInfo/>}/>
      <Route path='/mba/additional-info' element={<AdditionalInfo/>}/>
      <Route path='/mba/academic-rewards' element={<AcademicRewards/>}/>
      <Route path='/mba/experience' element={<Experience/>}/> 
      </Route>
    </Routes>
    </BrowserRouter>
    
    </>
  );
}

export default App;
