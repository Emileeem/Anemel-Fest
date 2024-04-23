import styles from "./style.module.css"
import InputComponent from "../InputComponent"
import { IconsComponent } from "../IconsComponent"
export function LoginComponent(){
    return ( 
        <>
        <main className={styles.main}>
            <nav className={styles.nav}>
                <img src="./brasil.png" className={styles.logo} />
                
                <img src="./menu.png" className={styles.logo} />
            </nav>
            <div className={styles.body}>
                <div className={styles.body2}>
                    <p className={styles.bemVindo}> BEM-VINDO(A) </p>
                    <div className={styles.bodyTextos}>
                        <p> Não possui uma conta?</p>
                        <button className={styles.cadastroButton}> Cadastre-se </button>
                    </div>
                </div>
                <div className={styles.loginCard}>
                    <img src="./logo.png" className={styles.logo2} />
                    <h1> ANEMEL FEST </h1>
                    <InputComponent labelType = "text" labelText="Email" />
                    <InputComponent labelType = "password" labelText="Senha" />
                    <div className={styles.checkbox}>
                        <InputComponent labelType = "checkbox"/>
                        Lembrar
                       <a className={styles.esquecer}> Esqueceu sua senha? </a> 
                    </div>
                    <button className={styles.entrarButton}> Entrar </button>
                    <IconsComponent />
        
                </div>
            </div>
        </main>
    </>
    )
}