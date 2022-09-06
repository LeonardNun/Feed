import { PencilLine } from "phosphor-react";
import { Avatar } from "./Avatar";

import styles from "./Sidebar.module.css";

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img
        className={styles.cover}
        src="https://images.unsplash.com/photo-1604964432806-254d07c11f32?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50"
      />
      
      <div className={styles.profile}>
        <Avatar src="https://scontent.fbnu6-1.fna.fbcdn.net/v/t39.30808-6/296100264_5183990455050778_4514582511849652333_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeHvvFlJEVukYldr0JQI_WDXWCPY2nTNG29YI9jadM0bb6OcO-ELVh4cQ8_Tzxe3jIp0KcPlJqKbsQftND81WDOZ&_nc_ohc=PTiB_pxlP7oAX8Z3EEM&_nc_oc=AQkm-5NcRDiywgtQ_33Nf92dpsB8fto-jNjU4WuBHLzTVg4pkSiuhNNIYfvnSC0ynIPDiK6VGym9r_DxEsyfm3nI&_nc_ht=scontent.fbnu6-1.fna&oh=00_AT_S_GsNQh8bQSzkk6fsdrOP5segAA_3IsY6vOjQNs3WNw&oe=63184877"/>
        <strong>Leonardo Nunes</strong>
        <span>Web Developer</span>
      </div>

      <footer>
        <a href="#">
            <PencilLine size={20} />
            Editar seu perfil
        </a>
      </footer>
    </aside>
  );
}
