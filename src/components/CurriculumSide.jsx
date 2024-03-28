import React from 'react';
import '../styles/Curriculum.css';
import { CurriculumHeader } from './CurriculumHeader';
import { CurriculumEducation } from './CurriculumEducation';
import { CurriculumExperience } from './CurriculumExperience';

export function Curriculum({ name, email, address, phone, educationArray}) {
  return (
    <main className="curriculum">
      <CurriculumHeader name={name} email={email} address={address} phone={phone}/>
      <CurriculumEducation educationArray={educationArray}/>
      <CurriculumExperience />
    </main>
  );
}