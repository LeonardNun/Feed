import { Header } from "./components/Header";
import { Post } from "./Post";
import "./global.css";
import sytles from "./App.module.css";
import { Sidebar } from "./components/Sidebar";
//JSX = JavaScript + XML (HTML)

export function App() {
  return (
    <div>
      <Header />

      <div className={sytles.wrapper}>
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
