"use client";

import "./Footer.css";
import { FiInstagram, FiYoutube, FiTwitter, FiMail } from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-left">
          <h3>TRAJETTO EXPRESS</h3>
          <p>Conectando lugares, entregando confiança.</p>
          <div className="social-icons">
            <a href="#">
              <FiInstagram />
            </a>
            <a href="#">
              <FiYoutube />
            </a>
            <a href="#">
              <FiTwitter />
            </a>
          </div>
        </div>

        <div className="footer-right">
          <h4>Newsletter</h4>
          <h5>Preencha seu e-mail e seja notificado sobre novidades.</h5>
          <form
            className="newsletter"
            action="https://formsubmit.co/trajetoexpress04@gmail.com"
            method="POST"
          >
            <input
              type="hidden"
              id="mensagem"
              name="mensagem"
              value="Aqui vc vai receber as novidades TrajetoExpress"
            />

            <input
              type="email"
              name="_cc"
              placeholder="Digite seu e-mail"
              required
            />

            {/* Redireciona para página de obrigado após envio */}
            <input type="hidden" name="_next" value="http://localhost:3000/" />

            {/* Assunto do e-mail */}
            <input
              type="hidden"
              name="_subject"
              value="Nova inscrição newsletter"
            />

            {/* CAPTCHA ativado */}
            <input type="hidden" name="_captcha" value="true" />

            <button type="submit">
              <FiMail />
            </button>
          </form>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          © 2025 Todos os direitos reservados - Trajetto Express - CNPJ:
          00.111.222/0001-55
        </p>
      </div>
    </footer>
  );
}
