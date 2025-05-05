import { useForm } from "react-hook-form";
import style from "./style.module.css";
import { postApiForm } from "../../assets/Functions/ApiFunctions/Post";
//import { CreateExpenseList } from "../Expenses/exp";

export type FormData = {
  description: string;
  amount: number;
  category: string;
  date: string;
};

export function FormDate({ onPostSuccess }: { onPostSuccess: () => void }) {
  const { register, handleSubmit, reset } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    await postApiForm(data);
    onPostSuccess();
    //CreateExpenseList({ listApi });
    reset();
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} id="expenseForm">
        <div className={style.formGroup}>
          <label>Descrição</label>
          <input type="text" {...register("description")} required />
        </div>
        <div className={style.formGroup}>
          <label>Valor (R$)</label>
          <input
            type="number"
            {...register("amount")}
            step="0.01"
            min="0.01"
            required
          />
        </div>
        <div className={style.formGroup}>
          <label>Categoria</label>
          <select {...register("category")} required>
            <option value="">Selecione uma categoria</option>
            <option value="alimentacao">Alimentação</option>
            <option value="transporte">Transporte</option>
            <option value="moradia">Moradia</option>
            <option value="lazer">Lazer</option>
            <option value="saude">Saúde</option>
            <option value="outros">Outros</option>
          </select>
        </div>
        <div className={style.formGroup}>
          <label>Data</label>
          <input type="date" {...register("date")} required />
        </div>
        <button type="submit" className={style.btn}>
          Adicionar Despesa
        </button>
      </form>
    </>
  );
}
