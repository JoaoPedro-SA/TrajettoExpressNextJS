"use client";

import styles from "./documentos.module.css";

export default function DocumentosPage() {
  async function consulta(id) {
    try {
      let url = "";

      if (id === 1) url = "http://127.0.0.1:5036/relatorio/veiculos";
      else if (id === 2) url = "http://127.0.0.1:5036/relatorio/motoristas";
      else if (id === 3) url = "http://127.0.0.1:5036/relatorio/cargas";
      else return alert("Erro ao consultar");

      // 🔹 Busca o arquivo como blob (PDF)
      const response = await fetch(url);
      const blob = await response.blob();

      // 🔹 Cria uma URL temporária para o PDF
      const fileURL = window.URL.createObjectURL(blob);

      // 🔹 Abre o PDF em nova aba
      window.open(fileURL, "_blank");
    } catch (erro) {
      console.error("Erro ao abrir PDF:", erro);
      alert("Falha ao abrir o documento!");
    }
  }

  return (
    <section>

      <table className={styles.tabela}>
        <h1>Consulta de Documentos</h1>
        <tbody>
          <tr>
            <th className={styles.celula}>Documento Veículos</th>
            <th className={styles.celula}>
              <button onClick={() => consulta(1)}>Consulta</button>
            </th>
          </tr>
          <tr>
            <th className={styles.celula}>Documento Motoristas</th>
            <th className={styles.celula}>
              <button onClick={() => consulta(2)}>Consulta</button>
            </th>
          </tr>
          <tr>
            <th className={styles.celula}>Documento Cargas</th>
            <th className={styles.celula}>
              <button onClick={() => consulta(3)}>Consulta</button>
            </th>
          </tr>
        </tbody>
      </table>
    </section>
  );
}
