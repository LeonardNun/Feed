import { ThumbsUp, Trash } from "phosphor-react";
import { Avatar } from "./Avatar";
import styles from "./Comment.module.css";

export function Comment({ content }) {
  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://scontent.fbnu6-1.fna.fbcdn.net/v/t39.30808-6/296100264_5183990455050778_4514582511849652333_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeHvvFlJEVukYldr0JQI_WDXWCPY2nTNG29YI9jadM0bb6OcO-ELVh4cQ8_Tzxe3jIp0KcPlJqKbsQftND81WDOZ&_nc_ohc=PTiB_pxlP7oAX8Z3EEM&_nc_oc=AQkm-5NcRDiywgtQ_33Nf92dpsB8fto-jNjU4WuBHLzTVg4pkSiuhNNIYfvnSC0ynIPDiK6VGym9r_DxEsyfm3nI&_nc_ht=scontent.fbnu6-1.fna&oh=00_AT_S_GsNQh8bQSzkk6fsdrOP5segAA_3IsY6vOjQNs3WNw&oe=63184877" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
            <header>
                <div className={styles.authorAndTime}>
                    <strong>Leonardo Nunes</strong>
                    <time title="04 de Setembro às 18:45" dateTime="2022-09-04 18:44:00">Cerca de 1h atrás</time>
                </div>

                <button title="Deletar comentário">
                    <Trash size={24}/>
                </button>
            </header>

            <p>{content}</p>
        </div>

        <footer>
            <button>
                <ThumbsUp/>
                Aplaudir <span>20</span>
            </button>
        </footer>
      </div>
    </div>
  );
}
