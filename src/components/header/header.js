import React from 'react';
import classes from './header.module.css';

const Header = () => {
    return (
        <div className={classes.HeaderBlock}>
            <div className={classes.HeaderTitle}>
                <a href="#">
                Game of Thrones DB
                </a>
            </div>
            <div className={classes.HeaderLinks}>
                <li>
                    <a href="#">Characters</a>
                </li>
                <li>
                    <a href="#">Houses</a>
                </li>
                <li>
                    <a href="#">Books</a>   
                </li>
            </div>
        </div>
    );
};

export default Header;