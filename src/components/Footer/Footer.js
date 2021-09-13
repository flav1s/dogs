import React from "react";
import { ReactComponent as Dogs } from "../../assets/dogs-footer.svg";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <Dogs />
      <p>Dogs. Alguns direitos reservados</p>
    </div>
  );
};

export default Footer;
