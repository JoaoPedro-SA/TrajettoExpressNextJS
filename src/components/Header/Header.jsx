"use client";

import "./Header.css";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import LoginButton from "./LoginButton";
import Link from "next/link";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <img src="/logo.png" alt="Trajetto Express" />
        </div>

        <nav className={`nav ${isOpen ? "open" : ""}`}>
          <ul className="nav-list">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/servicos">Serviços</Link></li>
            <li><Link href="/planos">Planos</Link></li>
            <li><Link href="/historia">Nossa história</Link></li>
            <li><Link href="/sustentabilidade">Sustentabilidade</Link></li>
          </ul>
        </nav>

        <div className="right-section">
          <LoginButton />
          <button className="menu-btn" onClick={toggleMenu}>
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>
    </header>
  );
}
