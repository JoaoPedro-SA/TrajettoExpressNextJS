"use client";

import { useState, useEffect } from "react";
import styles from "./motorista.module.css";

const apiUrl = "http://127.0.0.1:5036/motoristas";

export default function motoristaPage() {
  const [motoristas, setMotoristas] = useState([]);
  const [editando, setEditando] = useState(null);
  const [form, setForm] = useState({
    nome: "",
    cpf: "",
    rg: "",
    salario: "",
    data_nascimento: "",
    numero_cnh: "",
    categoria_cnh: "",
    validade_cnh: "",
    telefone: "",
    email: "",
    cep: "",
    logradouro: "",
    numero: "",
    complemento: "",
    bairro: "",
    cidade: "",
    estado: "",
  });

  useEffect(() => {
    carregarMotoristas();
  }, []);

  async function carregarMotoristas() {
    try {
      const response = await fetch(apiUrl);
      const data = await response.json();
      setMotoristas(data);
    } catch (error) {
      console.error("Erro ao carregar motoristas:", error);
    }
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }



  // Ajustar
  async function handleSubmit(e) {
    e.preventDefault();
    const method = editando ? "PUT" : "POST";
    const url = editando ? `${apiUrl}/${editando}` : apiUrl;

    try {
      const response = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          peso_maximo_kg: parseInt(form.peso_maximo_kg) || 0,
          ano_modelo: parseInt(form.ano_modelo) || 0,
          ano_fabricacao: parseInt(form.ano_fabricacao) || 0,
        }),
      });

      if (!response.ok) {
        alert("Erro ao salvar veículo.");
        return;
      }
  // Ajustar




      limparFormulario();
      carregarVeiculos();
      alert(editando ? "Veículo atualizado!" : "Veículo cadastrado!");
    } catch (error) {
      console.error("Erro ao salvar veículo:", error);
    }
  }

  async function carregarParaEdicao(id) {
    try {
      const response = await fetch(`${apiUrl}/${id}`);
      const data = await response.json();
      setForm(data);
      setEditando(id);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch (error) {
      console.error("Erro ao carregar motorista para edição:", error);
    }
  }

  async function deletarMotoristas(id) {
    if (!confirm("Tem certeza que deseja excluir este veículo?")) return;

    try {
      const response = await fetch(`${apiUrl}/${id}`, { method: "DELETE" });
      if (!response.ok) throw new Error("Erro ao excluir");
      alert("Motorista excluído com sucesso!");
      carregarMotoristas();
    } catch (error) {
      console.error("Erro ao excluir motorista:", error);
    }
  }

  function limparFormulario() {
    setForm({
      nome: "",
      cpf: "",
      rg: "",
      salario: "",
      data_nascimento: "",
      numero_cnh: "",
      categoria_cnh: "",
      validade_cnh: "",
      telefone: "",
      email: "",
      cep: "",
      logradouro: "",
      numero: "",
      complemento: "",
      bairro: "",
      cidade: "",
      estado: "",
    });
    setEditando(null);
  }

  return (
    <div className={styles.pageContainer}>
      <div className={styles.container}>
        <h1>Cadastro de Motoristas</h1>

        <form onSubmit={handleSubmit} className={styles.formVeiculo}>
          <input name="nome" placeholder="Nome" value={form.nome} onChange={handleChange} required />
          <input name="cpf" placeholder="CPF" value={form.cpf} onChange={handleChange} required />
          <input name="rg" placeholder="RG" value={form.rg} onChange={handleChange} required />
          <input name="salario" placeholder="Salário" value={form.salario} onChange={handleChange} required />
          <input name="nascimento" placeholder="Data Nascimento" value={form.nascimento} onChange={handleChange} required />
          <input name="cnh" placeholder="CNH" value={form.cnh} onChange={handleChange} required />
          <input name="categoria_cnh" placeholder="Categoria CNH" value={form.categoria_cnh} onChange={handleChange} required />
          <input name="validade_cnh" placeholder="Validade CNH" value={form.validade_cnh} onChange={handleChange} />
          <input name="telefone" placeholder="Telefone" value={form.telefone} onChange={handleChange} />
          <input name="cep" placeholder="CEP" value={form.cep} onChange={handleChange} />
          <input name="logradouro" placeholder="Logradouro" value={form.logradouro} onChange={handleChange} />
          <input name="numero" placeholder="Número" value={form.numero} onChange={handleChange} />
          <input name="complemento" placeholder="Complemento" value={form.complemento} onChange={handleChange} />
          <input name="bairro" placeholder="Bairro" value={form.bairro} onChange={handleChange} />
          <input name="cidade" placeholder="Cidade" value={form.cidade} onChange={handleChange} />
          <input name="estado" placeholder="UF" value={form.estado} onChange={handleChange} />

          <button id="btn-salvar" type="submit">
            {editando ? "Salvar Alterações" : "Cadastrar motorista"}
          </button>
        </form>
      </div>

      <div className={styles.motoristasLista}>
        <h2>Lista de Motoristas</h2>
        {/*classe local na tabela */}
        <table className={styles.tabelaMotoristas}>
          <thead className={styles.tabelaCabecalho}>
            <tr>
              <th>ID</th>
              <th>Nome</th>
              <th>CPF</th>
              <th>RG</th>
              <th>Salário</th>
              <th>Nascimento</th>
              <th>CNH</th>
              <th>Cat. CNH</th>
              <th>Validade CNH (kg)</th>
              <th>Telefone</th>
              <th>E-mail</th>
              <th>CEP</th>
              <th>Logradouro</th>
              <th>Número</th>
              <th>Complemento</th>
              <th>Bairro</th>
              <th>Cidade</th>
              <th>Estado</th>
            </tr>
          </thead>
          <tbody className={styles.tabelaCorpo} id="tabela-motoristas">
            {motoristas.map((v) => (
              <tr key={v.id}>
                <td>{v.id}</td>
                <td>{v.nome}</td>
                <td>{v.cpf}</td>
                <td>{v.rg}</td>
                <td>{v.salario}</td>
                <td>{v.data_nascimento}</td>
                <td>{v.numero_cnh}</td>
                <td>{v.categoria_cnh}</td>
                <td>{v.validade_cnh}</td>
                <td>{v.telefone}</td>
                <td>{v.email}</td>
                <td>{v.cep}</td>
                <td>{v.logradouro}</td>
                <td>{v.numero}</td>
                <td>{v.complemento}</td>
                <td>{v.bairro}</td>
                <td>{v.cidade}</td>
                <td>{v.estado}</td>
                <td>
                  <button className={styles.btnEditar} onClick={() => carregarParaEdicao(v.id)}>
                    Editar
                  </button>
                  <button className={styles.btnExcluir} onClick={() => deletarVeiculo(v.id)}>
                    Excluir
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
