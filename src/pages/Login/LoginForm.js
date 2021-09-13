import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Button from "../../components/Form/Button";

import Input from "../../components/Form/Input";
import useForm from "../../hooks/useForm";
import { UserContext } from "../../UserContext";
import { Error } from "../../components/Error/Error";
import styles from "./LoginForm.module.css";
import stylesBtn from "../../components/Form/Button.module.css";
import Head from "../../components/Helper/Head";

const LoginForm = () => {
  const username = useForm();
  const password = useForm();
  const { userLogin, error, loading } = useContext(UserContext);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (username.validate() && password.validate()) {
      userLogin(username.value, password.value);
    }
  };

  return (
    <section className="animeLeft">
      <Head title="Login" />

      <h1 className="title">Login</h1>
      <form className={styles.form} onSubmit={handleSubmit}>
        <Input label="Usuário" type="text" name="username" {...username} />
        <Input label="Senha" type="password" name="password" {...password} />
        {loading ? (
          <Button disabled>Carregando...</Button>
        ) : (
          <Button>Entrar</Button>
        )}
        <Error error={error && "Dados incorretos"} />
      </form>
      <Link className={styles.perdeu} to="/login/perdeu">
        Perdeu a senha?
      </Link>
      <div className={styles.cadastro}>
        <h2 className={styles.subtitle}>Cadastre-se</h2>
        <p>Ainda não possui conta? Cadastre-se no site</p>
      </div>
      <Link className={stylesBtn.btn} to="/login/criar">
        Cadastro
      </Link>
    </section>
  );
};

export default LoginForm;
