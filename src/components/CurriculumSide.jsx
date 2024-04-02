import React from 'react';
import '../styles/Curriculum.css';
import { CurriculumHeader } from './CurriculumHeader';
import { CurriculumEducation } from './CurriculumEducation';
import { CurriculumExperience } from './CurriculumExperience';

export function Curriculum({ name, email, address, phone, educationArray, experienceArray, selectedColor, isTop}) {
  const isLightColor = (color) => {
    // Convertendo a cor de hexadecimal para RGB
    const rgb = parseInt(color.substring(1), 16);
    const r = (rgb >> 16) & 0xff;
    const g = (rgb >> 8) & 0xff;
    const b = (rgb >> 0) & 0xff;

    // Calculando o luminance
    const luminance = 0.2126 * r + 0.7152 * g + 0.0722 * b;

    // Se o luminance for maior que 128, é uma cor clara
    return luminance > 128;
  };

  return (
    <main className="curriculum" style={{ flexDirection: isTop ? 'column' : 'row' }}>
      <CurriculumHeader name={name} email={email} address={address} phone={phone} selectedColor={selectedColor} isLightColor={isLightColor} isTop={isTop}/>
      <div className="curriculum-info">
        <CurriculumEducation educationArray={educationArray} selectedColor={selectedColor} isLightColor={isLightColor}/>
        <CurriculumExperience experienceArray={experienceArray} selectedColor={selectedColor} isLightColor={isLightColor}/>
      </div>
    </main>
  );
}