import React, { Fragment } from "react";
import ReactDOM from "react-dom";

import classes from "./ReminderModal.module.css";

const ModalOverlay = (props) => {
  return (
    <React.Fragment>
      <div
        className={classes.backdrop}
        onClick={props.onDeSelectReminderHandler}
      ></div>
      <div className={classes.modal}>
        <header className={classes.header}>
          <h2>Header</h2>
        </header>
        <div className={classes.content}>
          <p>Content</p>
        </div>
        <footer className={classes.actions}>
          <button>Edit</button>
          <button>Mark as Done</button>
          <button onClick={props.onDeSelectReminderHandler}>Close</button>
        </footer>
      </div>
    </React.Fragment>
  );
};

const ReminderModal = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <div id="reminderModal">
          <ModalOverlay
            onDeSelectReminderHandler={props.onDeSelectReminderHandler}
          />
        </div>,
        document.getElementById("modalRoot")
      )}
    </Fragment>
  );
};

export default ReminderModal;
