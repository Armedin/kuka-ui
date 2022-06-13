import { useContext } from 'react';
import { SnackbarContext, defaultDuration } from './Snackbar';

export const useSnackbar = () => {
  const { openSnackbar, closeSnackbar } = useContext(SnackbarContext);

  function open(text = '', duration = 0) {
    let newDuration = duration;
    if (duration === 0) {
      newDuration = Math.min(Math.max(text.length * 50, 3000), 7000);
    }

    openSnackbar(text, newDuration);
  }

  // Returns methods in hooks array way
  return [open, closeSnackbar];
};
