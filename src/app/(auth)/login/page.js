
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import styles from "./login.module.css";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");


    
    try {
      // Exemplo requisição para flask
      /*
      const res = await fetch("http://localhost:5000/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (!res.ok) throw new Error(data.message || "Erro ao fazer login");

      const token = data.token; // recebido do backend
      */

      // Simulação de login
      const token = "fake-token-123456";

      // token em cookie (expira em 1 hora)
      document.cookie = `token=${token}; path=/; max-age=3600; secure; samesite=strict`;

      // Manda para o dashboard
      router.push("/dashboard");

    } catch (err) {
      setError(err.message);
    }



  };

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
          <h2 className={styles.title}>Faça login em sua conta</h2>

          <form className={styles.form} onSubmit={handleLogin}>
            <label>E-mail</label>
            <input
              type="email"
              placeholder="seuemail@exemplo.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <label>Senha</label>
            <input
              type="password"
              placeholder="Digite sua senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            <div className={styles.actions}>
              <a href="#" className={styles.smallLink}>
                Esqueci minha senha
              </a>
            </div>

            {error && <p style={{ color: "red" }}>{error}</p>}

            <p className={styles.subtitle}>
              <br />
              Ainda não tem conta?{" "}
              <a href="#" className={styles.linkHighlight}>
                Criar conta
              </a>
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








// Versão sem salvamento de token em cookie

// "use client";

// import Link from "next/link";
// import Image from "next/image";
// import styles from "./login.module.css";

// export default function LoginPage() {
//   return (
//     <div className={styles.loginContainer}>
//       {/* Lado que tem o logo */}
//       <div className={styles.leftSide}>
//         <div className={styles.brand}>
//           {/* <h1>TRAJETTO</h1> */}
//            <Image
//             src="/logobranco.png"
//             alt="Trajetto Express"
//             width={300}
//             height={100}
//             priority
//           />
//           <p>Conectando lugares, entregando confiança.</p>
//         </div>
//       </div>

//       {/*formulario do login*/}
//       <div className={styles.rightSide}>
//         <div className={styles.formBox}>


//           <h2 className={styles.title}>Faça login em sua conta</h2>

//           <form className={styles.form}>
//             <label>E-mail</label>
//             <input type="email" placeholder="seuemail@exemplo.com" required />

//             <label>Senha</label>
//             <input type="password" placeholder="Digite sua senha" required />

//             <div className={styles.actions}>
//               <a href="#" className={styles.smallLink}>Esqueci minha senha</a>
//             </div>

//             <p className={styles.subtitle}>
//               <br></br>
//               Ainda não tem conta?{" "}
//               <a href="#" className={styles.linkHighlight}>Criar conta </a>
//             </p>

//             <button type="submit" className={styles.loginButton}>
//               Entrar 
//             </button>

//             <Link href="/" className={styles.backLink}>
//                Voltar para página inicial
//             </Link>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }