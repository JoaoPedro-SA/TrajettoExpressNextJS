
"use client";

import Image from "next/image";
import styles from "./conta.module.css";

export default function contaPage() {


  return (
    <div className={styles.loginContainer}>
      {/* Lado com logo */}
      <div className={styles.leftSide}>
        <div className={styles.brand}>
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

      {/* Lado do login */}
      <div className={styles.rightSide}>
        <div className={styles.formBox}>

          <div> Aqui onde vai fazer o cadastro </div>

        </div>
      </div>
    </div>
  );
}






