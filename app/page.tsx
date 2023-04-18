import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div>
        <div className="card">
          Welcome to your brand new NextJS app integrated with Pangea AuthN
          service for authentication.
        </div>
        <div className="card">
          You can read more about Pangea AuthN service here
          https://pangea.cloud/docs/
        </div>
      </div>
    </main>
  );
}
