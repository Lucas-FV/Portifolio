import styles from './NavBar.module.css'
import React, { useState } from 'react';

function NavBar() {

const [burgerClass, setBurgerClass] = useState ("burger-bar unclicked")
const [menuClass, setMenuClass] = useState("menu hidden")
const [isMenuClicked, setIsMenuClicked] = useState(false)

const updateMenu = () =>{
  if(!isMenuClicked){
    setBurgerClass("burger-bar clicked")
    setMenuClass("visible")
    console.log(burgerClass)
    console.log(menuClass)
  }
  else{
    setBurgerClass("burger-bar unclicked")
    setMenuClass("hidden")
    console.log(burgerClass)
    console.log(menuClass)
  }

  setIsMenuClicked(!isMenuClicked)

}

  return [
    <nav key="navBar" className={styles.nav}>
      <a className={styles.logo} href="/">Vilela's Portifolio</a>
      <div className={styles.burgerMenu} onClick={updateMenu}>
        <div className={styles.burger_class}></div>
        <div className={styles.burger_class}></div>
        <div className={styles.burger_class}></div>
      </div>
    </nav>,
    <div className={styles.container}>
      <div className={styles.menuClass}></div>
    </div>
    
  ];
}
export default NavBar;