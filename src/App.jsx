import { Header } from "./components/Header";
import { Post } from "./components/Post";
import { Sidebar } from './components/Sidebar'
import "./global.css";
import styles from "./App.module.css";

export function App() {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar/>
        <main>
          <Post author="Paulo Henrique" content="Um conteúdo muito legal" />
          <Post author="Paulo Henrique" content="Um conteúdo muito legal" />
          <Post author="Paulo Henrique" content="Um conteúdo muito legal" />
          <Post author="Paulo Henrique" content="Um conteúdo muito legal" />
          <Post author="Paulo Henrique" content="Um conteúdo muito legal" />
        </main>
      </div>
    </>
  );
}
