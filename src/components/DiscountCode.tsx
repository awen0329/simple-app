import React, { useState } from 'react';

const DiscountCode: React.FC = () => {
  const [discountCode, setDiscountCode] = useState('');
  const [generatedCode, setGeneratedCode] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDiscountCode(event.target.value);
  };

  const validateCode = () => {
    const pattern = /^DISCOUNT2024$/;
    return pattern.test(discountCode);
  };

  const generateRandomCode = () => {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let code = 'NEWCODE';
    for (let i = 0; i < 6; i++) {
      code += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return code;
  };

  const generateCode = () => {
    const newCode = generateRandomCode();
    setGeneratedCode(newCode);
  };

  return (
    <div className="mb-4">
      <h2 className="text-lg font-semibold mb-2">Enter Discount Code</h2>
      <input
        type="text"
        value={discountCode}
        onChange={handleChange}
        placeholder="Enter discount code"
        className="border p-2 w-full mb-2"
      />
      <button
        onClick={generateCode}
        className="bg-blue-500 text-white p-2 rounded"
      >
        Generate Code
      </button>
      {generatedCode && <p className="mt-2">Generated Code: {generatedCode}</p>}
      {!validateCode() && discountCode && <p className="text-red-500 mt-2">Invalid Code</p>}
    </div>
  );
};

export default DiscountCode;
