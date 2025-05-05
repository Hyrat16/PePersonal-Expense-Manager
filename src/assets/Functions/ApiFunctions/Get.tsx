export async function GetApiForm(setListApi) {
  const url = "http://localhost:3001/data";
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const data = await response.json();
    console.log(data);
    return setListApi(data);
  } catch (mensage) {
    console.log(mensage);
  }
}
