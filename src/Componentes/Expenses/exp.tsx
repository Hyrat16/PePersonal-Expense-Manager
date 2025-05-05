import styles from "./styles.module.css";
import dayjs from "dayjs";
import { useState } from "react";
/* import { FormData } from "../Form"; */
/* type CreateExpenseListProps = {
  listApi: Array<FormData>;
}; */

const removeButton = async (
  id,
  setListApi: React.Dispatch<React.SetStateAction<any[]>>
) => {
  const url = `http://localhost:3001/data/${id}`;
  try {
    const response = await fetch(url, {
      method: "DELETE",
      headers: { "Content-type": "application/json" },
    });

    if (response.ok) {
      setListApi((prevList) => prevList.filter((item) => item.id !== id));
    } else {
      console.error("Erro ao excluir o item:", response.statusText);
    }
  } catch (error) {
    console.error("Erro ao conectar com a API:", error);
  }
};

export function CreateExpenseList({ listApi, setListApi }) {
  const [searchTerm, setSearchTerm] = useState("");

  const sortedList = [...listApi].sort((a, b) =>
    dayjs(a.date).diff(dayjs(b.date))
  );

  const filteredList = sortedList.filter(
    (item) =>
      item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.date.includes(searchTerm) ||
      parseFloat(item.amount).toFixed(2).includes(searchTerm)
  );

  return (
    <div className={styles.expensesList}>
      <input
        type="text"
        placeholder="Buscar..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className={styles.searchInput}
      />
      <table>
        <thead>
          <tr>
            <th>Data</th>
            <th>Descrição</th>
            <th>Categoria</th>
            <th>Valor</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {filteredList.map((item) => (
            <tr key={item.id}>
              <td>{dayjs(item.date).format("DD/MM/YYYY")}</td>
              <td>{item.description}</td>
              <td>{item.category}</td>
              <td>{parseFloat(item.amount).toFixed(2)}</td>
              <td>
                <button
                  onClick={() => removeButton(item.id, setListApi)}
                  className={styles.actionBtn}
                >
                  Remover
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
