import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store';
import { setOption } from '../slices/optionSlice';

export const useOption = () => {
  const dispatch = useDispatch();
  const selectedOption = useSelector((state: RootState) => state.option.selectedOption);

  const changeOption = (option: string) => {
    dispatch(setOption(option));
  };

  return {
    selectedOption,
    changeOption,
  };
};
