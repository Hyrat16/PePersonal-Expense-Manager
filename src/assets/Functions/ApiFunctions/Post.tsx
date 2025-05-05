import { FormData } from "../../../Componentes/Form";

export async function postApiForm(data: FormData) {
  const url = "http://localhost:3001/data";
  await fetch(url, {
    method: "POST",
    body: JSON.stringify(data),
    headers: { "Content-type": "application/json" },
  });
}
