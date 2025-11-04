import "./login.module.css";

export const metadata = {
  title: "Login | Trajetto Express",
  description: "Acesse sua conta Trajetto Express.",
};

export default function LoginLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className="login-body">
        {children}
      </body>
    </html>
  );
}
