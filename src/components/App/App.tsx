import { Provider } from "../Provider";
import { RepositoryList } from "../RepositoryList";
import styles from "./App.module.scss";

function App() {
  return (
    <Provider>
      <div className={styles.root}>
        <header className={styles.header}>
          <h1 className={styles.title}>Popular TypeScript Projects on GitHub</h1>
        </header>
        <main>
          <RepositoryList />
        </main>
      </div>
    </Provider>
  );
}

export default App;
