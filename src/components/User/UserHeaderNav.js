import React, { useContext, useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { UserContext } from "../../UserContext";
import { ReactComponent as MinhasFotos } from "../../assets/feed.svg";
import { ReactComponent as Estatisticas } from "../../assets/estatisticas.svg";
import { ReactComponent as AdicionarFoto } from "../../assets/adicionar.svg";
import { ReactComponent as Sair } from "../../assets/sair.svg";
import styles from "./UserHeaderNav.module.css";
import useMedia from "../../hooks/useMedia";

const UserHeaderNav = () => {
  const mobile = useMedia("(max-width: 40rem)");
  const { userLogout } = useContext(UserContext);
  const [mobileMenu, setMobileMenu] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    setMobileMenu(false);
  }, [pathname]);

  return (
    <>
      {mobile && (
        <button
          aria-label="Menu"
          className={`${styles.mobileButton} ${
            mobileMenu && styles.mobileButtonActive
          }`}
          onClick={() => setMobileMenu(!mobileMenu)}
        ></button>
      )}
      <nav
        className={`${mobile ? styles.navMobile : styles.nav} ${
          mobileMenu && styles.navMobileActive
        }`}
      >
        {
          <NavLink to="/conta" end activeClassName={styles.active}>
            <MinhasFotos />
            {mobile && "Minhas Fotos"}
          </NavLink>
        }
        <NavLink to="/conta/estatisticas" activeClassName={styles.active}>
          <Estatisticas />
          {mobile && "Estatísticas"}
        </NavLink>
        <NavLink to="/conta/postar" activeClassName={styles.active}>
          <AdicionarFoto />
          {mobile && "Adicionar foto"}
        </NavLink>
        <button onClick={userLogout}>
          <Sair />
          {mobile && "Sair"}
        </button>
      </nav>
    </>
  );
};

export default UserHeaderNav;
