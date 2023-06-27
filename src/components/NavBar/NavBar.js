import classes from "./NavBar.module.css";

const NavBar = () => {
  return (
    <ul className={classes.sticky}>
      <li>
        <span>Remind Me - Tracker</span>
      </li>
    </ul>
  );
};

export default NavBar;
