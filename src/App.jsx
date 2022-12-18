import { Header } from "./components/Header";
import { Post } from "./Post";
import "./global.css";

export function App() {
  return (
    <>
      <Header />
      <Post author="Paulo Henrique" content="Um conteúdo muito legal" />
    </>
  );
}
