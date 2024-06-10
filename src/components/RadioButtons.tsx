import React from 'react';

interface RadioButtonsProps {
  selectedOption: string;
  changeOption: (option: string) => void;
}

const RadioButtons: React.FC<RadioButtonsProps> = ({ selectedOption, changeOption }) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    changeOption(event.target.value);
  };

  return (
    <div className="mb-4">
      <h2 className="text-lg font-semibold mb-2">Select an Option</h2>
      <label className="block mb-2">
        <input
          type="radio"
          value="Option A"
          checked={selectedOption === 'Option A'}
          onChange={handleChange}
          className="mr-2"
        />
        Option A
      </label>
      <label className="block mb-2">
        <input
          type="radio"
          value="Option B"
          checked={selectedOption === 'Option B'}
          onChange={handleChange}
          className="mr-2"
        />
        Option B
      </label>
      <label className="block mb-2">
        <input
          type="radio"
          value="Option C"
          checked={selectedOption === 'Option C'}
          onChange={handleChange}
          className="mr-2"
        />
        Option C
      </label>
    </div>
  );
};

export default RadioButtons;
