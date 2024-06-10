import React from 'react';
import RadioButtons from './components/RadioButtons';
import DiscountCode from './components/DiscountCode';
import NotesField from './components/NotesField';
import { useOption } from './hooks/useOption';
import { useNote } from './hooks/useNote';

const Main: React.FC = () => {
  const { selectedOption, changeOption } = useOption();
  const { note, changeNote } = useNote();

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Test Application</h1>
      <RadioButtons selectedOption={selectedOption} changeOption={changeOption} />
      <DiscountCode />
      <NotesField note={note} changeNote={changeNote} />
    </div>
  );
};

export default Main;
