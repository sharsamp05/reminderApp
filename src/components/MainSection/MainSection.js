import React, { useState } from "react";

import classes from "./MainSection.module.css";
import ArchivedItem from "./NewAndArchived/Archived/ArchivedItem";
import NewItem from "./NewAndArchived/NewItem/NewItem";
import Reminders from "./Reminders/Reminders";

const DUMMY_EXPENSES = [];

const MainSection = () => {
  //const remOrigList = [{ rem: "hh", remDesc: "asas" }];

  const [remItems, setRemItems] = useState(DUMMY_EXPENSES);

  const newItemHandler = (newReminder) => {
    setRemItems((prevItems) => {
      return [...prevItems, newReminder];
    });
  };

  return (
    <div className={classes.mainSection}>
      <div className={classes.gridContainerMain}>
        <div className={classes.gridItemMain}>
          <Reminders Items={remItems} />
        </div>
        <div className={classes.gridItemMain}>
          <div className={classes.gridContainerSub}>
            <div className={classes.gridItemSub}>
              <NewItem addItemHandler={newItemHandler} />
            </div>
            <div className={classes.gridItemSub}>
              <ArchivedItem />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainSection;
