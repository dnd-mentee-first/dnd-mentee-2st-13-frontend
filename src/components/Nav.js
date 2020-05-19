/*eslint-disable*/
import React, { useEffect, useState } from 'react';
// react components for routing our app without refresh
import { NavLink } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";
import { Apps, Explore,LockOpen,LockOutlined } from "@material-ui/icons";
import CustomDropdown from "./CustomDropdown";
import Button from "../layouts/Button";
import styles from "../assets/navStyle";

const useStyles = makeStyles(styles);

// Navigation 컴포넌트


export default function Nav(props, user, onLogout) {
  const classes = useStyles();
  const [login, setLogin] = useState(false);

  useEffect( ()=> {

  }, []);

  return (
    <List className={classes.list}>
       <ListItem className={classes.listItem}>
        <Button
          color="transparent"
          className={classes.navLink}
        >
          <Explore className={classes.icons} /><NavLink to="/food" className={classes.navText}>A good place to eat</NavLink>
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          color="transparent"
          className={classes.navLink}
        >
          <Explore className={classes.icons} /><NavLink to="/tour" className={classes.navText}>A Tourist spot</NavLink>
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <CustomDropdown
          noLiPadding
          buttonText="Community"
          buttonProps={{
            className: classes.navLink,
            color: "transparent"
          }}
          buttonIcon={Apps}
          dropdownList={[
            <NavLink to="/foodBoard" className={classes.dropdownLink}>
              A good place to eat
            </NavLink>,
            <NavLink to="/tourBoard" className={classes.dropdownLink}>
              A tourist spot
          </NavLink>,
          ]}
        />
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          color="transparent"
          className={classes.navLink}
        >
          <LockOutlined className={classes.icons} />
          <NavLink to="/login" className={classes.navText}>{login ? 'SIGN OUT' : 'SIGN IN'}</NavLink>
        </Button>
      </ListItem>
      { !login &&
      <ListItem className={classes.listItem}>
        <Button
          color="transparent"
          className={classes.navLink}
        >
          <LockOpen className={classes.icons} /><NavLink to="/register" className={classes.navText}>SIGN UP</NavLink>
        </Button>
      </ListItem>}
      {/*<ListItem className={classes.listItem}>*/}
        {/*<Tooltip*/}
        {/*  id="gitlab"*/}
        {/*  title="Follow us on gitlab"*/}
        {/*  placement={window.innerWidth > 959 ? "top" : "left"}*/}
        {/*  classes={{ tooltip: classes.tooltip }}*/}
        {/*>*/}
        {/*  <Button*/}
        {/*    href="https://gitlab.com/d-d---"*/}
        {/*    target="_blank"*/}
        {/*    color="transparent"*/}
        {/*    className={classes.navLink}*/}
        {/*  >*/}
        {/*    <i className={classes.socialIcons + " fab fa-gitlab"} />*/}
        {/*     Follow us on gitlab*/}
        {/*  </Button>*/}
        {/*</Tooltip>*/}
      {/*</ListItem>*/}
    </List>
  );
}
