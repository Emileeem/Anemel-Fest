import React, { useState } from "react";
import styles from "./style.module.css";
import InputComponent from "../InputComponent";
import { IconsComponent } from "../IconsComponent";
import { i18n } from "../../translate/i18n";
import brasilFlag from "./brasil.png";
import euaFlag from "./eua.png";

export function LoginComponent() {
    const [currentLanguage, setCurrentLanguage] = useState("pt");
    const [flagImage, setFlagImage] = useState(brasilFlag);

    const toggleLanguage = () => {
        const newLanguage = currentLanguage === "pt" ? "en" : "pt";
        setCurrentLanguage(newLanguage);
        setFlagImage(newLanguage === "pt" ? brasilFlag : euaFlag);
    };

    return (
        <>
            <main className={styles.main}>
                <nav className={styles.nav}>
                    <img onClick={toggleLanguage} src={flagImage} className={styles.logo} />
                    <img src="./menu.png" className={styles.logo} />
                </nav>
                <div className={styles.body}>
                    <div className={styles.body2}>
                        <p className={styles.bemVindo}> {i18n.t("login.welcome", { lng: currentLanguage })} </p>
                        <div className={styles.bodyTextos}>
                            <p> {i18n.t("login.account", { lng: currentLanguage })} </p>
                            <button className={styles.cadastroButton}> {i18n.t("login.buttonCad", { lng: currentLanguage })} </button>
                        </div>
                    </div>
                    <div className={styles.loginCard}>
                        <img src="./logo.png" className={styles.logo2} />
                        <h1> ANEMEL FEST </h1>
                        <InputComponent labelType="text" labelText={i18n.t("login.login", { lng: currentLanguage })} />
                        <InputComponent labelType="password" labelText={i18n.t("login.password", { lng: currentLanguage })} />
                        <div className={styles.checkbox}>
                            <InputComponent labelType="checkbox" />
                            {i18n.t("login.remember", { lng: currentLanguage })}
                            <a className={styles.esquecer}> {i18n.t("login.pass", { lng: currentLanguage })}  </a>
                        </div>
                        <button className={styles.entrarButton}> {i18n.t("login.button", { lng: currentLanguage })} </button>
                        <IconsComponent />
                    </div>
                </div>
            </main>
        </>
    );
}
