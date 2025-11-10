"use client";

import { useState, useEffect } from "react";
import styles from "./veiculo.module.css";

const apiUrl = "http://127.0.0.1:5036/veiculos";

export default function VeiculoPage() {
  const [veiculos, setVeiculos] = useState([]);
  const [editando, setEditando] = useState(null);
  const [form, setForm] = useState({
    placa: "",
    modelo: "",
    marca: "",
    renavan: "",
    chassi: "",
    cor: "",
    tipo: "",
    peso_maximo_kg: "",
    ano_modelo: "",
    ano_fabricacao: "",
  });

  useEffect(() => {
    carregarVeiculos();
  }, []);

  async function carregarVeiculos() {
    try {
      const response = await fetch(apiUrl);
      const data = await response.json();
      setVeiculos(data);
    } catch (error) {
      console.error("Erro ao carregar veículos:", error);
    }
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

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
      console.error("Erro ao carregar veículo para edição:", error);
    }
  }

  async function deletarVeiculo(id) {
    if (!confirm("Tem certeza que deseja excluir este veículo?")) return;

    try {
      const response = await fetch(`${apiUrl}/${id}`, { method: "DELETE" });
      if (!response.ok) throw new Error("Erro ao excluir");
      alert("Veículo excluído com sucesso!");
      carregarVeiculos();
    } catch (error) {
      console.error("Erro ao excluir veículo:", error);
    }
  }

  function limparFormulario() {
    setForm({
      placa: "",
      modelo: "",
      marca: "",
      renavan: "",
      chassi: "",
      cor: "",
      tipo: "",
      peso_maximo_kg: "",
      ano_modelo: "",
      ano_fabricacao: "",
    });
    setEditando(null);
  }

  return (
    <div className={styles.pageContainer}>
      <div className={styles.container}>
        <h1>Cadastro de Veículos</h1>

        <form onSubmit={handleSubmit} className={styles.formVeiculo}>
          <h3>Modelo</h3>
          <input name="modelo" placeholder="Modelo Veículo" value={form.modelo} onChange={handleChange} required />
          <input name="marca" placeholder="Marca do Veículo" value={form.marca} onChange={handleChange} required />
          <h3>Dados do Veículo</h3>
          <input name="placa" placeholder="Placa" value={form.placa} onChange={handleChange} required />
          <input name="renavan" placeholder="Renavan" value={form.renavan} onChange={handleChange} required />
          <input name="chassi" placeholder="Chassi" value={form.chassi} onChange={handleChange} required />
          <input name="ano_modelo" placeholder="Ano Modelo" value={form.ano_modelo} onChange={handleChange} />
          <input name="ano_fabricacao" placeholder="Ano de Fabricação" value={form.ano_fabricacao} onChange={handleChange} />
          <input name="cor" placeholder="Cor" value={form.cor} onChange={handleChange} required />
          <h3>Capacidade de Carga</h3>
          <input name="peso_maximo_kg" placeholder="Peso Máximo (kg)" value={form.peso_maximo_kg} onChange={handleChange} />
          <input name="tipo" placeholder="Tipo de Veículo" value={form.tipo} onChange={handleChange} required />
          
          <button id="btn-salvar" type="submit">
            {editando ? "Salvar Alterações" : "Cadastrar veículo"}
          </button>
        </form>
      </div>

      <div className={styles.veiculoLista}>
        <h2>Lista de Veículos</h2>
        {/* ✅ aplica a classe local na tabela */}
        <table className={styles.tabelaVeiculos}>
          <thead className={styles.tabelaCabecalho}>
            <tr>
              <th>ID</th>
              <th>Placa</th>
              <th>Modelo</th>
              <th>Marca</th>
              <th>Renavan</th>
              <th>Chassi</th>
              <th>Cor</th>
              <th>Tipo</th>
              <th>Peso Máx (kg)</th>
              <th>Ano Modelo</th>
              <th>Ano Fabricação</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody className={styles.tabelaCorpo} id="tabela-veiculos">
            {veiculos.map((v) => (
              <tr key={v.id}>
                <td>{v.id}</td>
                <td>{v.placa}</td>
                <td>{v.modelo}</td>
                <td>{v.marca}</td>
                <td>{v.renavan}</td>
                <td>{v.chassi}</td>
                <td>{v.cor}</td>
                <td>{v.tipo}</td>
                <td>{v.peso_maximo_kg}</td>
                <td>{v.ano_modelo}</td>
                <td>{v.ano_fabricacao}</td>
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
