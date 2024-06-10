import React from 'react';

interface NotesFieldProps {
  note: string;
  changeNote: (newNote: string) => void;
}

const NotesField: React.FC<NotesFieldProps> = ({ note, changeNote }) => {
  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    changeNote(event.target.value);
  };

  return (
    <div className="mb-4">
      <h2 className="text-lg font-semibold mb-2">Enter Notes</h2>
      <textarea
        value={note}
        onChange={handleChange}
        placeholder="Enter your note"
        className="border p-2 w-full h-24"
      />
    </div>
  );
};

export default NotesField;
