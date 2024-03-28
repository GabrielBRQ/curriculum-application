import { useState } from 'react';
import '../styles/App.css'
import { Settings } from './SettingsSide.jsx'
import { Curriculum } from './CurriculumSide.jsx'

export function App() {
  const [curriculumName, setCurriculumname] = useState('');
  const [curriculumEmail, setCurriculumemail] = useState('');
  const [curriculumPhone, setCurriculumphone] = useState('');
  const [curriculumAddress, setCurriculumaddress] = useState('');
  const [curriculumSchool, setCurriculumschool] = useState('');
  const [curriculumDegree, setCurriculumdegree] = useState('');
  const [curriculumStart, setCurriculumstart] = useState('');
  const [curriculumEnd, setCurriculumend] = useState('');
  const [curriculumLocation, setCurriculumlocation] = useState('');
  const [educationArray, setEducationArray] = useState([]);

  const handleSettingsChange = (newName) => {
    setCurriculumname(newName);
  };

  const handleEmail = (newEmail) => {
    setCurriculumemail(newEmail);
  };

  const handlePhone = (newPhone) => {
    setCurriculumphone(newPhone);
  };

  const handleAddress = (newAddress) => {
    setCurriculumaddress(newAddress);
  };

  const handleSchool = (newSchool) => {
    setCurriculumschool(newSchool);
  };

  const handleDegree = (newDegree) => {
    setCurriculumdegree(newDegree);
  };

  const handleStart = (newStart) => {
    setCurriculumstart(newStart);
  };

  const handleEnd = (newEnd) => {
    setCurriculumend(newEnd);
  };

  const handleLocation = (newLocation) => {
    setCurriculumlocation(newLocation);
  };

  const addEducation = (schoolValue, degreeValue, startValue, endValue, locationValue) => {
    const newObject = {
      school: schoolValue,
      degree: degreeValue,
      start: startValue,
      end: endValue,
      location: locationValue
    };

    setEducationArray([...educationArray, newObject]);
  }

  return (
    <div className="container">
      <Settings 
        onNameChange={handleSettingsChange} 
        onEmailChange={handleEmail} 
        onPhoneChange={handlePhone} 
        onAddressChange={handleAddress} 
        onSchoolChange={handleSchool} 
        onDegreeChange={handleDegree} 
        onStartChange={handleStart} 
        onEndChange={handleEnd} 
        onLocationChange={handleLocation}
        addEducation={addEducation}
        educationArray={educationArray}
      />
      <Curriculum 
        name={curriculumName} 
        email={curriculumEmail} 
        address={curriculumAddress} 
        phone={curriculumPhone} 
        educationArray={educationArray}
      />
    </div>
  )
}

