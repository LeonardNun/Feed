import { Header } from "./components/Header";
import { Post } from "./components/Post";
import { Sidebar } from "./components/Sidebar";

import styles from "./App.module.css";
import "./global.css";
//JSX = JavaScript + XML (HTML)

const posts = [
 {
  id: 1,
  author: {
    avatarUrl: 'https://github.com/LeonardNun.png',
    name: 'Leonardo Nunes',
    role: 'Futuro Expert em Programação'
  },
  content: [
    { type: 'paragraph', content: 'Fala galeraa 👋'},
    { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
    { type: 'link', content: 'jane.design/doctorcare'},
  ],
  publishedAt: new Date('2022-05-03 20:00:00'),
 },
 {
  id: 2,
  author: {
    avatarUrl: 'https://github.com/LeonardNun.png',
    name: 'Isa Mello',
    role: 'Futuro Expert em Desing'
  },
  content: [
    { type: 'paragraph', content: 'Fala galeraa 👋'},
    { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
    { type: 'link', content: 'jane.design/doctorcare'},
  ],
  publishedAt: new Date('2022-10-03 20:00:00'),
 },
];

//Iteração

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return (<Post
                key={post.id} 
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
            />
          )})}
        </main>
      </div>
    </div>
  );
}
