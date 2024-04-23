import styles from "./style.module.css"
import InputComponent from "../InputComponent";
import { IconsComponent } from "../IconsComponent";

//bootstrap
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export function SignInComponent() {
    return (
        <>
            <main className={styles.body}>
                <nav className={styles.navbar}>
                    <img src="./brasil.png" className={styles.icon} />
                    <img src="./menu.png" className={styles.icon} />
                </nav>
                <div className={styles.card}>
                    <p className={styles.card_title}> BEM-VINDO(A) </p>
                    <div className={styles.card_text}>
                        <p className={styles.subext}> CRIE SUA CONTA</p>
                    </div>
                </div>
                <div className={styles.form}>
                    <Container>
                        <Row>
                            <Col md={6}>
                                <InputComponent labelType="text" labelText="Nome" />
                            </Col>
                            <Col md={6}>
                                <InputComponent labelType="text" labelText="Sobrenome" />
                            </Col>
                        </Row>

                        <Row>
                            <Col md={6}>
                                <InputComponent width="200px" labelType="text" labelText="Email" />
                            </Col>
                            <Col md={6}>
                                <InputComponent labelType="date" labelText="Data Nascimento" />
                            </Col>
                        </Row>

                        <Row>
                            <Col md={6}>
                                <InputComponent labelType="text" labelText="CPF" />
                            </Col>
                            <Col md={6}>
                                <InputComponent labelType="password" labelText="Senha" />
                            </Col>
                        </Row>

                        <Row>
                            <Col md={6}>
                                <InputComponent labelType="password" labelText="Confirme Senha" />
                            </Col>
                        </Row>
                    </Container>
                </div>

            <div className={styles.container}>
                <button className={styles.entrarButton}> CRIAR </button>
            </div>
                <IconsComponent />
            </main>
        </>
    );
}
