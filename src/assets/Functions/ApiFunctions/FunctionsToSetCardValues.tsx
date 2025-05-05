import dayjs from "dayjs";

export function TotalSpentInTheMonth({ listApi }) {
  const numbersArray = listApi.map((item: number) => parseFloat(item.amount));
  const total = numbersArray.reduce((acc, curr) => acc + curr, 0);
  return parseFloat(total.toFixed(2));
}

export function DailyAverage({ listApi }) {
  const numbersArray = listApi.map((item: number) => parseFloat(item.amount));
  const daily = dayjs().date();
  const average = numbersArray.reduce((acc, curr) => acc + curr, 0) / daily;
  return parseFloat(average.toFixed(2));
}

export function BiggestExpense({ listApi }) {
  const numbersArray = listApi.map((item: number) => parseFloat(item.amount));
  const trueValue = Math.max.apply(null, numbersArray);
  return trueValue;
}
