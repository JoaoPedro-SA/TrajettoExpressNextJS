"use client";

import Link from "next/link";
import Image from "next/image";
import styles from "./login.module.css";

export default function LoginPage() {
  return (
    <div className={styles.loginContainer}>
      {/* Lado que tem o logo */}
      <div className={styles.leftSide}>
        <div className={styles.brand}>
          {/* <h1>TRAJETTO</h1> */}
           <Image
            src="/logobranco.png"
            alt="Trajetto Express"
            width={300}
            height={100}
            priority
          />
          <p>Conectando lugares, entregando confiança.</p>
        </div>
      </div>

      {/*formulário*/}
      <div className={styles.rightSide}>
        <div className={styles.formBox}>

          {/* <p className={styles.subtitle}>
            Ainda não tem conta?{" "}
            <a href="#" className={styles.linkHighlight}>Criar conta </a>
          </p> */}

          <h2 className={styles.title}>Faça login em sua conta</h2>

          <form className={styles.form}>
            <label>E-mail</label>
            <input type="email" placeholder="seuemail@exemplo.com" required />

            <label>Senha</label>
            <input type="password" placeholder="Digite sua senha" required />

            <div className={styles.actions}>
              <a href="#" className={styles.smallLink}>Esqueci minha senha</a>
            </div>

            <p className={styles.subtitle}>
              <br></br>
              Ainda não tem conta?{" "}
              <a href="#" className={styles.linkHighlight}>Criar conta </a>
            </p>

            <button type="submit" className={styles.loginButton}>
              Entrar 
            </button>

            <Link href="/" className={styles.backLink}>
               Voltar para página inicial
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}


