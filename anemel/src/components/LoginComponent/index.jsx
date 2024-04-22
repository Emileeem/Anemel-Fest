import styles from "./style.module.css"

export function LoginComponent(){
    return ( 
        <>
        <main className={styles.main}>
            <nav className={styles.nav}>
                <img src="./brasil.png" className={styles.logo} />
                
                <img src="./menu.png" className={styles.logo} />
            </nav>
        </main>
    </>
    )
}