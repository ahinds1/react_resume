import React from 'react';
import Main from './Main/Main';
import Sidebar from './Sidebar/Sidebar';
import classes from './Body.module.css';

const body = () => {
  return (
    <div className={classes.Body}>
      <Main />
      <Sidebar />
    </div>
  );
};

export default body;
