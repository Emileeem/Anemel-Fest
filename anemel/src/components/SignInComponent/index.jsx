import styles from "./style.module.css"
import InputComponent from "../InputComponent";

export function SignInComponent(){
    return (
        <>
            <main className={styles.body}>
                <nav className={styles.navbar}>

                </nav>

                <div className={styles.form}>
                    <InputComponent></InputComponent>
                </div>
            </main>
        </>
    );
}