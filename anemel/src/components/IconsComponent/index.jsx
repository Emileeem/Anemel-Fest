import styles from "./style.module.css"

export function IconsComponent() {
    return (
      <>
        <div className={styles.icons}>
            <img src="https://logopng.com.br/logos/whatsapp-33.png" className={styles.icon}/>
            <img src="https://png.pngtree.com/png-vector/20221018/ourmid/pngtree-instagram-icon-png-image_6315974.png" className={styles.icon}/>
            <img src="https://upload.wikimedia.org/wikipedia/commons/c/cd/Facebook_logo_%28square%29.png" className={styles.icon}/>
        </div>
      </>
    );
  }