import styles from "./app.module.css";
import { Header } from "./Componentes/Header";
import { Card } from "./Componentes/Card";
import { FormDate } from "./Componentes/Form";
import { GetApiForm } from "./assets/Functions/ApiFunctions/Get";
import { useEffect, useState } from "react";
import { CreateExpenseList } from "./Componentes/Expenses/exp";
import {
  TotalSpentInTheMonth,
  DailyAverage,
  BiggestExpense,
} from "./assets/Functions/ApiFunctions/FunctionsToSetCardValues";
//import { ExpenseList } from "./components/Expenses";

export function App() {
  //const inicialization = useRef(false);
  const [listApi, setListApi] = useState([]);

  /* const getApiForm = async () => {
    const url = "http://localhost:3001/data";
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }

      const data = await response.json();
      return setListApi(data);
    } catch (mensage) {
      console.log(mensage);
    }
  }; */

  useEffect(() => {
    GetApiForm(setListApi);
  }, []);

  return (
    <>
      <Header title="Gerenciador de Despesas Pessoais"></Header>
      <div className={styles.container}>
        <div className={styles.dashboard}>
          <Card
            text="Total Gasto no Mês"
            value={TotalSpentInTheMonth({ listApi: listApi })}
          ></Card>
          <Card
            text="Média Diária"
            value={DailyAverage({ listApi: listApi })}
          ></Card>
          <Card
            text="Maior Despesa"
            value={BiggestExpense({ listApi: listApi })}
          ></Card>
        </div>
        <div className={styles.expenseForm}>
          <h2>Adicionar Nova Despesa</h2>
          <FormDate onPostSuccess={() => GetApiForm(setListApi)}></FormDate>
        </div>

        <CreateExpenseList listApi={listApi} setListApi={setListApi} />
      </div>
    </>
  );
}
