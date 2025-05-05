import styles from "./styles.module.css";

type Props = {
  title: string;
};

export function Header({ title }: Props) {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <h1>{title}</h1>
      </div>
    </header>
  );
}
