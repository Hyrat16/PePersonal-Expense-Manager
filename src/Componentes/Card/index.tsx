import styles from "./styles.module.css";

type Props = {
  text: string;
  value: number;
};

export function Card({ text, value }: Props) {
  return (
    <div className={styles.card}>
      <h3>{text}</h3>
      <div className="value">{value}</div>
    </div>
  );
}
