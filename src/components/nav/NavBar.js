/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import style from './NavBar.module.css';
import companiesLogo from '../../assets/logo.png';
import Button from '../button/Button';

const NavBar = () => {
  const [state, setState] = useState({ toggle: true });

  const pullMenu = () => {
    setState((state) => ({ toggle: !state.toggle }));
    if (state.toggle) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  };

  const handleClick = (event) => {
    event.preventDefault();
    const targetId = event.currentTarget.getAttribute('href');
    setTimeout(() => {
      document.querySelector(targetId).scrollIntoView({
        behavior: 'smooth',
        duration: 1000,
      });
    }, 500);
    pullMenu();
  };

  const nav = (
    <div className={style.nav_bar}>
      <div className={style.nav_bar_head}>
        <img className={style.company_name} src={companiesLogo} alt="Companies Logo" />
      </div>
      <div className={`${style.nav_bar_menu} ${state.toggle ? '' : style.active}`}>
        <a onClick={handleClick} href="#home" className={style.menu_item}>Home</a>
        <a onClick={handleClick} href="#service" className={style.menu_item}>Services</a>
        <a onClick={handleClick} href="#contact" className={style.menu_item}>Contact us</a>
        <div className={style.nav_buttons}>
          <Link to="/signup">
            <Button
              text="Sign Up"
              btnType={4}
            />
          </Link>
          <Link to="/signin/patient">
            <Button
              text="Log In"
              btnType={3}
            />
          </Link>
        </div>
      </div>
      <div className={`${style.hamburger} ${state.toggle ? '' : style.active}`} onClick={pullMenu}>
        <span className={style.horizontal} />
        <span className={style.horizontal} />
        <span className={style.horizontal} />
      </div>
    </div>
  );
  return nav;
};

export default NavBar;
