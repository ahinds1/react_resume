import React from 'react';
import classes from './Header.module.css';

const header = () => {
  return (
    <header>
      <nav>
        <span>Alex Hinds</span>
        <span>Built Using ReactJS 16.6</span>
        <ul>
          <li>Education</li>
          <li>Work</li>
          <li>Skills</li>
          <li>Other</li>
          <li>Stuff</li>
        </ul>
      </nav>
    </header>
  );
};

export default header;
