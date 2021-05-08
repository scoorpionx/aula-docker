import { useState } from "react";
import styles from "../styles/Home.module.css";
import Service from "../api/index";
export default function Home({ produtos }) {
  const [nome, setNome] = useState("");
  const [valor, setValor] = useState("");

  const onSubmit = async () => {
    try {
      await Service({
        route: "produtos",
        reqType: "post",
        body: { nome, valor },
      });
      alert("Cadastrado com sucesso! Atualize a página!");
    } catch (error) {
      alert(`Erro: ${error.message}`);
    }
  };
  return (
    <div className={styles.container}>
      <table className={styles.table}>
        <tr className={styles.tr}>
          <th className={styles.th}>ID</th>
          <th className={styles.th}>Nome</th>
          <th className={styles.th}>Valor</th>
        </tr>
        {produtos.map((item) => (
          <tr className={styles.tr}>
            <th className={styles.th}>{item.id}</th>
            <th className={styles.th}>{item.nome}</th>
            <th className={styles.th}>R$ {item.valor}</th>
          </tr>
        ))}
      </table>
      <form className={styles.form} onSubmit={onSubmit}>
        <input
          type="text"
          name="Nome"
          id="nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />
        <input
          type="text"
          name="Valor"
          id="valor"
          value={valor}
          onChange={(e) => setValor(e.target.value)}
        />
        <input type="submit" value="Enviar" />
      </form>
    </div>
  );
}

Home.getInitialProps = async (ctx) => {
  const res = await Service({ route: "produtos", reqType: "get" });
  return { produtos: res };
};
