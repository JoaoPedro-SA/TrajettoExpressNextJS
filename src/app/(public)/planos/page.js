// export default function PlanosPage() {
//   return (
//     <section style={{ padding: "2rem" }}>
//       <br></br>
//       <br></br>
//       <br></br>
//       <br></br>
//       <br></br>
//       <br></br>
//       <br></br>
//       <br></br>
//       <h1>Planos Trajetto</h1>
//       <p>Veja aqui nossos planos e opções de entrega.</p>
//       <br></br>
//       <br></br>
//       <br></br>
//       <br></br>
//       <br></br>
//       <br></br>
//       <br></br>
//       <br></br>
//     </section>
//   );
// }



"use client";

import { useState } from "react";
import styles from "./planos.module.css";

export default function PlanosPage() {
  const [planos, setPlanos] = useState([
    {
      id: 1,
      nome: "Essencial",
      preco: "R$139/mês",
      descricao: "Ideal para quem trabalha com marktplaces." ,
      info_adicional: "Se você atende as entregas para Marketplaces (Mercado Livre, Shopee, Amazon, etc), esse plano é ideal para você.",
      recursos: [
        "3 usuário",
        "1 GB de armazenamento",
        "Suporte por e-mail"
      ],
      botao: "Saiba mais",
    },
        
    {
      id: 2,
      nome: "MultiBenefícios",
      preco: "R$289/mês",
      descricao: "Perfeito para pequenas empresas com necessidade de automação.",
      recursos: [
        "10 usuários",
        "5 GB de armazenamento",
        "Relatórios básicos",
        "Automação de tarefas",
        "Suporte chat e e-mail"
      ],
      botao: "Saiba mais",
    },
    {
      id: 3,
      nome: "Empresarial",
      preco: "R$399/mês",
      descricao: "Para empresas que precisam de alto desempenho e relatórios avançados.",
      recursos: [
        "15 usuários",
        "10 GB armazenamento",
        "Relatórios avançados",
        "Automação de tarefas",
        "Suporte telefone, chat e e-mail"
      ],
      botao: "Saiba mais",
    },

    {
      id: 4,
      nome: "Personalizado",
      preco: "Preço sob consultar",
      descricao: "Plano personalizado para suas necessidades." ,
      info_adicional: "Ideal para sua empresa que precisa se um sistema customizável e robusto, que atenda a alta demanda das atividades diarias do seu fluxo de trabalho",
      recursos: [
        "Usuários ilimitados",
        "Armazenamento customizável",
        "Relatórios Personalizados",
        "Automação de tarefas",
        "Suporte telefone, chat e e-mail"
      ],
      botao: "Fale com nossa equipe",
    }
  ]);


  return (
    <div className={styles.container}>
      <h1 className={styles.titulo}>Escolha o plano ideal para você</h1>

      <div className={styles.planosGrid}>
        {planos.map((plano) => (
          <div key={plano.id} className={styles.card}>
            <h2>{plano.nome}</h2>
            <p className={styles.preco}>{plano.preco}</p>
            <p className={styles.descricao}>{plano.descricao}</p>
            <p className={styles.info_adicional}>{plano.info_adicional}</p>

            <ul>
              {plano.recursos.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>

            <button className={styles.botao}>{plano.botao}</button>

          </div>
        ))}
      </div>

      {/* Card abaixo dos planos */}
      <div className={styles.infoExtra}>
        <div className={styles.infoTexto}>
          <h2>Por que escolher o Trajetto?</h2>
          <p>
            O Trajetto é uma plataforma completa, confiável e simples de usar.
            Ideal para quem busca praticidade, tecnologia e suporte real no dia a dia.
          </p>

          <ul>
            <li>🚀 Suporte multicanal aprovado por 95% dos clientes</li>
            <li>☁️ Sistema 100% online — acesse de qualquer lugar</li>
            <li>💸 Sem custo de ativação — comece agora mesmo</li>
          </ul>
        </div>

        <div className={styles.infoImagem}>
          <img src="../cliente.png" alt="Cliente feliz" />
        </div>
      </div>
    </div>
  );
}
