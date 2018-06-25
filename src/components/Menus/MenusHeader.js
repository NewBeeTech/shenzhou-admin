
import React from 'react';
import styles from '../../assets/stylesheets/Menus/Menus.css';
// import LOGO from '../../assets/images/logo.png';


const MenuHeader = () => {
  return (
    <div className={styles.MenusHeaderContainer}>
      {/*<div><img src={LOGO} width="50" height="50" /></div>*/}
      <div className={styles.sloganContainer}>
        <div className={styles.sloganSubtitle}>神舟后台管理系统</div>
      </div>
    </div>
  );
};

export default MenuHeader;
