"use client";

import styles from "./documentos.module.css";

export default function DocumentosPage() {
  // 🔹 Função auxiliar: converte Blob → Base64
  function blobToBase64(blob) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onloadend = () => resolve(reader.result.split(",")[1]); // remove prefixo data:application/pdf;base64,
      reader.onerror = reject;
      reader.readAsDataURL(blob);
    });
  }

  async function consulta(id) {
    try {
      let url = "";

      if (id === 1) url = "http://127.0.0.1:5036/relatorio/veiculos";
      else if (id === 2) url = "http://127.0.0.1:5036/relatorio/motoristas";
      else if (id === 3) url = "http://127.0.0.1:5036/relatorio/cargas";
      else if (id === 4) url = "http://127.0.0.1:5036/relatorio/empresa";
      else if (id === 5) url = "http://127.0.0.1:5036/relatorio/faturamento";
      else return alert("Erro ao consultar");

      const response = await fetch(url);
      const blob = await response.blob();
      const fileURL = window.URL.createObjectURL(blob);
      window.open(fileURL, "_blank");
    } catch (erro) {
      console.error("Erro ao abrir PDF:", erro);
      alert("Falha ao abrir o documento!");
    }
  }

  async function EnviarPorEmail(id) {
    try {
      const destinatario = prompt("Digite o e-mail do destinatário:");
      if (!destinatario) return;

      let url = "";
      let nome = "";
      if (id === 1) { url = "http://127.0.0.1:5036/relatorio/veiculos"; nome = "veiculos.pdf"; }
      else if (id === 2) { url = "http://127.0.0.1:5036/relatorio/motoristas"; nome = "motoristas.pdf"; }
      else if (id === 3) { url = "http://127.0.0.1:5036/relatorio/cargas"; nome = "cargas.pdf"; }
      else if (id === 4) { url = "http://127.0.0.1:5036/relatorio/empresa"; nome = "empresa.pdf"; }
      else if (id === 5) { url = "http://127.0.0.1:5036/relatorio/faturamento"; nome = "faturamento.pdf"; }
      else return alert("Erro ao consultar");

      const response = await fetch(url);
      const blob = await response.blob();
      const base64PDF = await blobToBase64(blob);

      const envio = await fetch("http://127.0.0.1:5036/envia/Email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          destinatario: destinatario,
          assunto: "Relatório solicitado",
          mensagem: "Segue em anexo o relatório solicitado.",
          arquivo_nome: nome,
          arquivo_base64: base64PDF,
        }),
      });

      const resultado = await envio.json();

      if (envio.ok) {
        alert("📨 E-mail enviado com sucesso!");
      } else {
        alert("❌ Erro ao enviar e-mail: " + (resultado.erro || "desconhecido"));
      }
    } catch (erro) {
      console.error("Erro ao enviar por e-mail:", erro);
      alert("Falha ao enviar o documento!");
    }
  }

  return (
    <section className={styles.tabela}>
      <h1>Consulta de Documentos</h1>
      <table >
        <tbody>
          <tr>
            <th className={styles.celula}>Documento Veículos</th>
            <th className={styles.celula}>
              <div className={styles.div_button}>
                <button onClick={() => consulta(1)}>Consulta</button>
                <button onClick={() => EnviarPorEmail(1)}>Enviar por e-mail</button>
              </div>
            </th>
          </tr>
          <tr>
            <th className={styles.celula}>Documento Motoristas</th>
            <th className={styles.celula}>
              <div className={styles.div_button}>
                <button onClick={() => consulta(2)}>Consulta</button>
                <button onClick={() => EnviarPorEmail(2)}>Enviar por e-mail</button>
              </div>
            </th>
          </tr>
          <tr>
            <th className={styles.celula}>Documento Cargas</th>
            <th className={styles.celula}>
              <div className={styles.div_button}>
                <button onClick={() => consulta(3)}>Consulta</button>
                <button onClick={() => EnviarPorEmail(3)}>Enviar por e-mail</button>
              </div>
            </th>
          </tr>
          <tr>
            <th className={styles.celula}>Documento Empresa</th>
            <th className={styles.celula}>
              <div className={styles.div_button}>
                <button onClick={() => consulta(4)}>Consulta</button>
                <button onClick={() => EnviarPorEmail(4)}>Enviar por e-mail</button>
              </div>
            </th>
          </tr>
          <tr>
            <th className={styles.celula}>Documento Financeiro</th>
            <th className={styles.celula}>
              <div className={styles.div_button}>
                <button onClick={() => consulta(5)}>Consulta</button>
                <button onClick={() => EnviarPorEmail(5)}>Enviar por e-mail</button>
              </div>
            </th>
          </tr>
        </tbody>
      </table>
    </section>
  );
}
