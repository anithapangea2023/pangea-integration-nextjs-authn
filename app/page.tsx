"use client";

import { useAuth } from "@pangeacyber/react-auth";
import styles from "./page.module.css";

export default function Home() {
  const {
    authenticated,
    loading,
    error,
    user,
    client,
    login,
    logout,
    getToken,
  } = useAuth();

  return (
    <main className={styles.main}>
      <div>
        {!authenticated && (
          <div className="card">
            <h2>
              Welcome to your brand new NextJS app integrated with{" "}
              <a href="https://pangea.cloud/">Pangea</a>
            </h2>
          </div>
        )}
        {authenticated && (
          <div className="card">
            <h2>
              You have been successfully authenticated by{" "}
              <a href="https://pangea.cloud/">Pangea AuthN Service</a>
            </h2>
          </div>
        )}

        <div className="card">
          You can read more about <a href="https://pangea.cloud/">Pangea</a>{" "}
          AuthN service
          <a href="https://pangea.cloud/docs/authn"> here</a>
        </div>
      </div>
    </main>
  );
}
