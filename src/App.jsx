import { Header } from "./components/Header";
import { Post } from "./components/Post";
import { Sidebar } from "./components/Sidebar";

import styles from "./App.module.css";
import "./global.css";
//JSX = JavaScript + XML (HTML)

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            author="Isadora Beatriz de Mello"
            content="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima sed odit enim, recusandae temporibus neque assumenda? Similique ipsam commodi quas modi perferendis explicabo praesentium unde voluptas, suscipit et officia laborum."
          />

          <Post
            author="Leonardo Nunes"
            content="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima sed odit enim, recusandae temporibus neque assumenda? Similique ipsam commodi quas modi perferendis explicabo praesentium unde voluptas, suscipit et officia laborum.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima sed odit enim, recusandae temporibus neque assumenda? Similique ipsam commodi quas modi perferendis explicabo praesentium unde voluptas, suscipit et officia laborum."
          />
        </main>
      </div>
    </div>
  );
}
