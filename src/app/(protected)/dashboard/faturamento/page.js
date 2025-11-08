"use client";

// para funcionar faça =>  npm install recharts
// link da API => https://recharts.github.io/

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import styles from "./faturamento.module.css";


const dados = [
  { mes: "Jan", faturamento: 4200, despesas: 2500, clientes: 120, novosClientes: 25, pedidos: 310, produtosVendidos: 980, ticketMedio: 35, reclamacoes: 5, satisfacao: 85 },
  { mes: "Fev", faturamento: 3800, despesas: 2300, clientes: 110, novosClientes: 20, pedidos: 290, produtosVendidos: 910, ticketMedio: 34, reclamacoes: 4, satisfacao: 90 },
  { mes: "Mar", faturamento: 4600, despesas: 2700, clientes: 140, novosClientes: 28, pedidos: 350, produtosVendidos: 1050, ticketMedio: 36, reclamacoes: 6, satisfacao: 99 },
  { mes: "Abr", faturamento: 5100, despesas: 3000, clientes: 150, novosClientes: 30, pedidos: 370, produtosVendidos: 1120, ticketMedio: 37, reclamacoes: 5, satisfacao: 97 },
  { mes: "Mai", faturamento: 4900, despesas: 2900, clientes: 145, novosClientes: 26, pedidos: 360, produtosVendidos: 1090, ticketMedio: 36, reclamacoes: 3, satisfacao: 95 },
  { mes: "Jun", faturamento: 5300, despesas: 3100, clientes: 160, novosClientes: 32, pedidos: 400, produtosVendidos: 1180, ticketMedio: 38, reclamacoes: 7, satisfacao: 90 },
  { mes: "Jul", faturamento: 5600, despesas: 3200, clientes: 165, novosClientes: 35, pedidos: 420, produtosVendidos: 1220, ticketMedio: 39, reclamacoes: 6, satisfacao: 91 },
  { mes: "Ago", faturamento: 5800, despesas: 3300, clientes: 170, novosClientes: 34, pedidos: 430, produtosVendidos: 1270, ticketMedio: 39, reclamacoes: 5, satisfacao: 83 },
  { mes: "Set", faturamento: 6000, despesas: 3400, clientes: 180, novosClientes: 36, pedidos: 450, produtosVendidos: 1320, ticketMedio: 40, reclamacoes: 4, satisfacao: 94 },
  { mes: "Out", faturamento: 6400, despesas: 3600, clientes: 190, novosClientes: 38, pedidos: 470, produtosVendidos: 1380, ticketMedio: 41, reclamacoes: 5, satisfacao: 88 },
  { mes: "Nov", faturamento: 7000, despesas: 3900, clientes: 200, novosClientes: 42, pedidos: 500, produtosVendidos: 1490, ticketMedio: 42, reclamacoes: 4, satisfacao: 96 },
  { mes: "Dez", faturamento: 7500, despesas: 4200, clientes: 210, novosClientes: 45, pedidos: 520, produtosVendidos: 1550, ticketMedio: 43, reclamacoes: 6, satisfacao: 99 },
];



export default function FaturamentoPage() {

  // calcula lucro
  const dadosComLucro = dados.map((d) => ({
    ...d,
    lucro: d.faturamento - d.despesas,
  }));

  return (

    <div style={styles.container}>


      <section className={styles.dashboard}>

        <h2>Resultdo do ultimo mes (Outubro)</h2>
        <div className={styles.kpiContainer}>
          <div className={styles.kpiCard}>

            <h3>Faturamento Total</h3>
            <p>
              R${" "}
              {dados.reduce((acc, cur) => acc + cur.faturamento, 0).toLocaleString(
                "pt-BR"
              )}
            </p>
          </div>
          <div className={styles.kpiCard}>
            <h3>Despesas Totais</h3>
            <p>
              R${" "}
              {dados.reduce((acc, cur) => acc + cur.despesas, 0).toLocaleString(
                "pt-BR"
              )}
            </p>
          </div>
          <div className={styles.kpiCard}>
            <h3>Lucro Total</h3>
            <p>
              R${" "}
              {dadosComLucro
                .reduce((acc, cur) => acc + cur.lucro, 0)
                .toLocaleString("pt-BR")}
            </p>
          </div>
          <div className={styles.kpiCard}>
            <h3>Colaboradores </h3>
            <p>
              {dados.reduce((acc, cur) => acc + cur.clientes, 0).toLocaleString(
                "pt-BR"
              )}
            </p>
          </div>

          <div className={styles.kpiCard}>

            <h3>Pedidos já feitos</h3>
            <p>
              {dados.reduce((acc, cur) => acc + cur.pedidos, 0).toLocaleString(
                "pt-BR"
              )}
            </p>
          </div>
          <div className={styles.kpiCard}>
            <h3>Total de Produtos Vendidos</h3>
            <p>
              {dados.reduce((acc, cur) => acc + cur.produtosVendidos, 0).toLocaleString(
                "pt-BR"
              )}
            </p>
          </div>
          <div className={styles.kpiCard}>
            <h3>Total de Reclamações</h3>
            <p>
              {dadosComLucro
                .reduce((acc, cur) => acc + cur.reclamacoes, 0)
                .toLocaleString("pt-BR")}
            </p>
          </div>
          <div className={styles.kpiCard}>
            <h3>Total de clientes Satisfeitos </h3>
            <p>
              {dados.reduce((acc, cur) => acc + cur.satisfacao, 0).toLocaleString(
                "pt-BR"
              )}
            </p>
          </div>


        </div>

        <h1>Resumo dos 12 meses</h1>

        <div style={{ width: "100%", height: 400 }}>
          <ResponsiveContainer>
            <LineChart data={dadosComLucro}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="mes" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey="faturamento"
                stroke="#4f46e5"
                strokeWidth={2}
              />
              <Line
                type="monotone"
                dataKey="produtosVendidos"
                stroke="#ef4444"
                strokeWidth={2}
              />
              <Line
                type="monotone"
                dataKey="lucro"
                stroke="#10b981"
                strokeWidth={2}
              />
              <Line
                type="monotone"
                dataKey="despesas"
                stroke="#ff0000ff"
                strokeWidth={2}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>



        <div className={styles.containerTabelas}>
          <div className={styles.tabelaWrapper}>
            <h2>Fluxo de Colaboradores </h2>
            <table className={styles.tabela}>
              <thead>
                <tr>
                  <th>Mês</th>
                  <th>Colaboradores </th>
                </tr>
              </thead>
              <tbody>
                {dados.map((d, i) => (
                  <tr key={i}>
                    <td>{d.mes}</td>
                    <td>{d.clientes.toLocaleString("pt-BR")}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className={styles.tabelaWrapper}>
            <h2>Fluxo de Novos Colaboradores</h2>
            <table className={styles.tabelaZebrada}>
              <thead>
                <tr>
                  <th>Mês</th>
                  <th> Colaboradores</th>
                </tr>
              </thead>
              <tbody>
                {dados.map((d, i) => (
                  <tr key={i} className={i % 2 === 0 ? styles.linhaPar : styles.linhaImpar}>
                    <td>{d.mes}</td>
                    <td>{d.novosClientes.toLocaleString("pt-BR")}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className={styles.tabelaWrapper}>
            <h2>Total de Pedidos feitos no ultimo Ano </h2>
            <table className={styles.tabela}>
              <thead>
                <tr>
                  <th>Mês</th>
                  <th>Pedidos </th>
                </tr>
              </thead>
              <tbody>
                {dados.map((d, i) => (
                  <tr key={i}>
                    <td>{d.mes}</td>
                    <td>{d.pedidos.toLocaleString("pt-BR")}</td>
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr>
                  <td><strong>Total</strong></td>
                  <td>
                    <strong>
                      {dados.reduce((acc, cur) => acc + cur.pedidos, 0).toLocaleString("pt-BR")}
                    </strong>
                  </td>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>

        <h2>Faturamento por Mês</h2>
        <div className={styles.cardsContainer}>
          {dados.map((d, i) => (
            <div key={i} className={styles.card}>
              <h3>{d.mes}</h3>
              <p><strong>R$ {d.faturamento.toLocaleString("pt-BR")}</strong></p>
            </div>
          ))}
        </div>

        <div className={styles.tabelaWrapper}>
          <h2>Reclamações por Mês</h2>
          <table className={styles.tabela}>
            <thead>
              <tr>
                {dados.map((d, i) => (
                  <th key={i}>{d.mes}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              <tr>
                {dados.map((d, i) => (
                  <td key={i}>{d.reclamacoes.toLocaleString("pt-BR")}</td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>

        <div className={styles.containerTabelas}>

          <div className={styles.tabelaWrapper}>
            <h2>Produtos Vendidos por Mês</h2>
            <table className={styles.tabela}>
              <thead>
                <tr>
                  <th>Mês</th>
                  <th>Produtos Vendidos</th>
                  <th>Variação (%)</th>
                </tr>
              </thead>
              <tbody>
                {dados.map((d, i) => {
                  const anterior = dados[i - 1]?.produtosVendidos || d.produtosVendidos;
                  const variacao = ((d.produtosVendidos - anterior) / anterior) * 100;
                  return (
                    <tr key={i}>
                      <td>{d.mes}</td>
                      <td>{d.produtosVendidos.toLocaleString("pt-BR")}</td>
                      <td style={{ color: variacao >= 0 ? "green" : "red" }}>
                        {i === 0 ? "—" : variacao.toFixed(1) + "%"}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          <div className={styles.tabelaWrapper}>
            <h2>Meses com Maiores Faturamento</h2>
            <table className={styles.tabela}>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Mês</th>
                  <th>Faturamento (R$)</th>
                </tr>
              </thead>
              <tbody>
                {[...dados]
                  .sort((a, b) => b.faturamento - a.faturamento)
                  .map((d, i) => (
                    <tr key={i}>
                      <td>{i + 1}</td>
                      <td>{d.mes}</td>
                      <td>{d.faturamento.toLocaleString("pt-BR")}</td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>

          <div className={styles.tabelaWrapper}>
            <h2>Satisfação dos Colaboradores</h2>
            <table className={styles.tabela}>
              <thead>
                <tr>
                  <th>Mês</th>
                  <th>Colaboradores</th>
                  <th>Satisfação (%)</th>
                </tr>
              </thead>
              <tbody>
                {dados.map((d, i) => {
                  const largura = d.satisfacao;
                  return (
                    <tr key={i}>
                      <td>{d.mes}</td>
                      <td>{d.clientes.toLocaleString("pt-BR")}</td>
                      <td>
                        <div className={styles.barraFundo}>
                          <div
                            className={styles.barraProgresso}
                            style={{
                              width: `${largura}%`,
                              backgroundColor: largura >= 90 ? "#4caf50" : "#ff9800", // verde se alto, laranja se médio
                            }}
                          ></div>
                          <span className={styles.valorSatisfacao}>{largura}%</span>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>


        </div>




      </section >


    </div >

  );
}
