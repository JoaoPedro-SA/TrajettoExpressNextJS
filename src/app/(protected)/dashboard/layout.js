"use client";
import { useState } from "react";
import Image from "next/image";
import styles from "./dashboard.module.css";

export default function DashboardLayout({ children }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className={styles.dashboardContainer}>
      {/*botão menu mobile hambunguer */}
      <button
        className={styles.menuToggle}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        ☰
      </button>

      {/*barra menu */}
      <aside className={`${styles.sidebar} ${menuOpen ? styles.open : ""}`}>
        <div className={styles.logoBox}>
          <Image
            src="/logobranco.png"
            alt="Logo Trajetto Express"
            width={160}
            height={60}
            priority
            className={styles.logo}
          />
        </div>

        <h4>Painel</h4>
        <ul>
          <li><a href="/dashboard/carga">Manifesto de Carga</a></li>
          <li><a href="/dashboard/veiculo">Veículos</a></li>
          <li><a href="/dashboard/motorista">Motoristas</a></li>
          <li><a href="/dashboard/documentos">Consulta documentos</a></li>
          <li><a href="/dashboard/faturamento">Faturamento</a></li>
          <li><a href="/dashboard/cliente">Clientes</a></li>
          {/* verificar viabilidade da rota destinatarios, talvez não seja necessaria */}
          <li><a href="/dashboard/destinatario">Destinatários</a></li>
        

        </ul>
        <ul>
          <li><a href="/" className={styles.logout}>Logout</a></li>
        </ul>
      </aside>

      {/*Conteúdo*/}
      <main className={styles.mainContent}>
        {children}
      </main>
    </div>
  );
}
