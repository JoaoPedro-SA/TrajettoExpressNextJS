"use client";
import { FiUser } from "react-icons/fi";
import "./Header.css";

export default function LoginButton() {
  return (
    <a href="/login" className="login-btn">
      <FiUser size={18} />
      <span> Login</span>
    </a>
  );
}
