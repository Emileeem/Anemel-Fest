import styles from "./style.module.css"
import InputComponent from "../InputComponent";
import { IconsComponent } from "../IconsComponent";
import { i18n } from "../../translate/i18n";
import brasilFlag from "../../assets/brasil.png";
import euaFlag from "../../assets/eua.png";
import { useState } from "react";
//bootstrap
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export function SignInComponent() {

    const [currentLanguage, setCurrentLanguage] = useState("pt");
    const [flagImage, setFlagImage] = useState(brasilFlag);

    const toggleLanguage = () => {
        const newLanguage = currentLanguage === "pt" ? "en" : "pt";
        setCurrentLanguage(newLanguage);
        setFlagImage(newLanguage === "pt" ? brasilFlag : euaFlag);
    };
    
    return (
        <>
            <main className={styles.body}>
                <nav className={styles.navbar}>
                    <img onClick={toggleLanguage} src={flagImage} className={styles.logo} />
                    <img src="./menu.png" className={styles.icon} />
                </nav>
                <div className={styles.card}>
                    <p className={styles.card_title}> {i18n.t("cadastro.welcome", { lng: currentLanguage })} </p>
                    <div className={styles.card_text}>
                        <p className={styles.subext}>  {i18n.t("cadastro.account", { lng: currentLanguage })}</p>
                    </div>
                </div>
                <div className={styles.form}>
                    <Container>
                        <Row>
                            <Col md={8}>
                                <InputComponent labelType="text" labelText= {i18n.t("cadastro.nameInput", { lng: currentLanguage })} />
                            </Col>
                            <Col md={6}>
                                <InputComponent labelType="text" labelText= {i18n.t("cadastro.lastname", { lng: currentLanguage })} />
                            </Col>
                        </Row>

                        <Row>
                            <Col md={6}>
                                <InputComponent width="200px" labelType="text" labelText= {i18n.t("cadastro.email", { lng: currentLanguage })} />
                            </Col>
                            <Col md={6}>
                                <InputComponent labelType="date" labelText= {i18n.t("cadastro.birthday", { lng: currentLanguage })} />
                            </Col>
                        </Row>

                        <Row>
                            <Col md={6}>
                                <InputComponent labelType="text" labelText="CPF" />
                            </Col>
                            <Col md={6}>
                                <InputComponent labelType="password" labelText= {i18n.t("cadastro.password", { lng: currentLanguage })} />
                            </Col>
                        </Row>

                        <Row>
                            <Col md={6}>
                                <InputComponent labelType="password" labelText= {i18n.t("cadastro.confirmpass", { lng: currentLanguage })} />
                            </Col>
                        </Row>
                    </Container>
                </div>

            <div className={styles.container}>
                <button className={styles.entrarButton}>  {i18n.t("cadastro.btn", { lng: currentLanguage })} </button>
            </div>
            </main>
        </>
    );
}
