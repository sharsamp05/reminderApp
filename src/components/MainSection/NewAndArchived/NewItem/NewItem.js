import classes from "./NewItem.module.css";

import React from "react";
import useInput from "../../../../hooks/useInput";

const NewItem = (props) => {
  const {
    enteredInput: enteredInputRem,
    //inputIsTouched: inputIsTouchedRem,
    inputIsValid: inputIsValidRem,
    inputHasError: inputHasErrorRem,
    updateEnteredInput: updateEnteredInputRem,
    updateInputBlur: updateInputBlurRem,
    resetInput: resetInputRem,
  } = useInput((enteredInput) => enteredInput.trim() !== "");

  const {
    enteredInput: enteredInputRemDate,
    //inputIsTouched: inputIsTouchedRemDate,
    inputIsValid: inputIsValidRemDate,
    inputHasError: inputHasErrorRemDate,
    updateEnteredInput: updateEnteredInputRemDate,
    updateInputBlur: updateInputBlurRemDate,
    resetInput: resetInputRemDate,
  } = useInput((enteredInput) => enteredInput.trim() !== "");

  const {
    enteredInput: enteredInputRemDesc,
    //inputIsTouched: inputIsTouchedRemDesc,
    //inputIsValid: inputIsValidRemDesc,
    //inputHasError: inputHasErrorRemDesc,
    updateEnteredInput: updateEnteredInputRemDesc,
    //updateInputBlur: updateInputBlurRemDesc,
    resetInput: resetInputRemDesc,
  } = useInput((enteredInput) => enteredInput.trim() !== "");

  let formIsValid = false;
  if (inputIsValidRem && inputIsValidRemDate) {
    formIsValid = true;
  }

  const newItemSubmitHandler = (event) => {
    event.preventDefault();
    console.log("Submit New item");

    const newReminderItem = {
      rem: enteredInputRem,
      remDue: enteredInputRemDate,
      //remDesc: newReminderDesc,
    };
    props.addItemHandler(newReminderItem);
    resetInputRem();
    resetInputRemDate();
    resetInputRemDesc();
  };

  return (
    <React.Fragment>
      <h4>Create New Reminder</h4>
      <div className={classes.form}>
        <form>
          <table>
            <tbody>
              <tr>
                <td>
                  <label htmlFor="reminderItem">Remind me about</label>
                </td>
                <td>
                  <input
                    className={classes.formInput}
                    type="text"
                    id="reminderItem"
                    name="reminderItem"
                    placeholder="Reminder Me"
                    onChange={updateEnteredInputRem}
                    onBlur={updateInputBlurRem}
                    value={enteredInputRem}
                  />
                </td>
                <td>
                  {inputHasErrorRem && (
                    <p className={classes.error}>Reminder Cannot be Empty</p>
                  )}
                </td>
              </tr>
              <tr>
                <td>
                  <label htmlFor="reminderDate">Due Date</label>
                </td>
                <td>
                  <input
                    className={classes.formInput}
                    type="date"
                    id="reminderDate"
                    name="reminderDate"
                    onChange={updateEnteredInputRemDate}
                    value={enteredInputRemDate}
                    onBlur={updateInputBlurRemDate}
                  />
                </td>
                <td>
                  {inputHasErrorRemDate && (
                    <p className={classes.error}>Select a due date</p>
                  )}
                </td>
              </tr>
              <tr>
                <td>
                  <label htmlFor="reminderDesc">Reminder description</label>
                </td>
                <td>
                  <textarea
                    onChange={updateEnteredInputRemDesc}
                    className={classes.formInput}
                    rows={2}
                    cols={16}
                    wrap="hard"
                    value={enteredInputRemDesc}
                  />
                </td>
              </tr>
            </tbody>
          </table>
          <div className={classes.buttonDiv}>
            <button
              className={classes.submitButton}
              onClick={newItemSubmitHandler}
              disabled={!formIsValid}
            >
              Create Reminder
            </button>
          </div>
        </form>
      </div>
    </React.Fragment>
  );
};

export default NewItem;
