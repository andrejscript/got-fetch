import React from 'react';
import classes from './header.module.css';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className={classes.HeaderBlock}>
      <div className={classes.HeaderTitle}>
        <Link to='/'>Game of Thrones DB</Link>
      </div>
      <div className={classes.HeaderLinks}>
        <li>
          <Link to='/characters/'>Characters</Link>
        </li>
        <li>
          <Link to='/houses/'>Houses</Link>
        </li>
        <li>
          <Link to='/books/'>Books</Link>
        </li>
      </div>
    </div>
  );
};

export default Header;
