import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store';
import { setNote } from '../slices/noteSlice';

export const useNote = () => {
  const dispatch = useDispatch();
  const note = useSelector((state: RootState) => state.note.note);

  const changeNote = (newNote: string) => {
    dispatch(setNote(newNote));
  };

  return {
    note,
    changeNote,
  };
};
