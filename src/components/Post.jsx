import { Avatar } from "./Avatar";
import { Comment } from "./Comment";
import styles from "./Post.module.css";

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar
            src="https://scontent.fbnu6-1.fna.fbcdn.net/v/t39.30808-6/278735412_2357320314422345_311864875936362385_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeF93SXjcnlx57aUbwiKxPgwRca_PBIxX69Fxr88EjFfrziJO2GjOyKjufG_r5EqFTjdsK-U4jEXtqPTdbXD0iFR&_nc_ohc=bE_Ydo-PdFcAX_or2Vp&tn=jWKPjNdGyMzI-Chs&_nc_ht=scontent.fbnu6-1.fna&oh=00_AT-YXBbkdkKY4JU_upr2n2ng2zva25uq0cvcf1NMjD4hGA&oe=6319BA9D"
          />
          <div className={styles.authorInfo}>
            <strong>Isah Bea</strong>
            <span>Ui/Ux Design</span>
          </div>
        </div>

        <time title="04 de Setembro às 18:45" dateTime="2022-09-04 18:44:00">
          Publicado a 1h
        </time>
      </header>

      <div className={styles.content}>
        <p>
          <p>Fala galeraa 👋</p>

          <p>
            Acabei de subir mais um projeto no meu portifa. É um projeto que fiz
            no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare
            🚀
          </p>

          <p>
            👉 <a href="">jane.design/doctorcare</a>
          </p>

          <p>
            <a href="">#novoprojeto</a> <a href="">#nlw</a>{" "}
            <a href="">#rocketseat</a>
          </p>
        </p>
      </div>

      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea placeholder="Deixe um comentário" />

        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        <Comment/>
        <Comment/>
        <Comment/>
      </div>
    </article>
  );
}
