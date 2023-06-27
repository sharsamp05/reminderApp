import React, { useState } from "react";

import ReminderModal from "../../UI/Modals/ReminderModal";

import classes from "./Reminders.module.css";

const Reminders = (props) => {
  //console.log("Props:", props.Items);

  const [showReminderModal, setShowReminderModal] = useState(false);

  const onSelectReminderHandler = (event) => {
    event.preventDefault();
    setShowReminderModal(true);
  };

  const onDeSelectReminderHandler = (event) => {
    event.preventDefault();
    setShowReminderModal(false);
  };

  return (
    <React.Fragment>
      {showReminderModal ? (
        <ReminderModal onDeSelectReminderHandler={onDeSelectReminderHandler} />
      ) : (
        <div>
          <h4>Reminders</h4>
          <div className={classes.remindersMain}>
            {props.Items.map((Item, count) => (
              <li className={classes.listItem} key={count}>
                <button
                  className={classes.remindersButton}
                  onClick={onSelectReminderHandler}
                >
                  {Item.rem}
                </button>
              </li>
            ))}
          </div>
        </div>
      )}
    </React.Fragment>
  );
};

export default Reminders;
