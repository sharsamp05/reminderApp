import { useState } from "react";

const useInput = (inputValidateFunc) => {
  const [enteredInput, setEnteredInput] = useState("");
  const [inputIsTouched, setInputIsTouched] = useState(false);

  const inputIsValid = inputValidateFunc(enteredInput);
  const inputHasError = !inputIsValid && inputIsTouched;

  const updateEnteredInput = (event) => {
    setEnteredInput(event.target.value);
  };

  const updateInputBlur = (event) => {
    setInputIsTouched(true);
  };

  const resetInput = (event) => {
    setEnteredInput("");
    setInputIsTouched(false);
  };

  return {
    enteredInput: enteredInput,
    inputIsTouched: inputIsTouched,
    inputIsValid: inputIsValid,
    inputHasError: inputHasError,
    updateEnteredInput: updateEnteredInput,
    updateInputBlur: updateInputBlur,
    resetInput: resetInput,
  };
};

export default useInput;
