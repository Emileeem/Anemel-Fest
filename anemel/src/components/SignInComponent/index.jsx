import styles from "./style.module.css"
import InputComponent from "../InputComponent";

//bootstrap
import Container from 'react-bootstrap/Container';
import Stack from 'react-bootstrap/Stack';

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
                        <div className={styles.row}> {/* Adicionando margem vertical com a classe 'my-3' */}
                            <Stack direction="horizontal" gap={2}>
                                <InputComponent labelType = "text" labelText="Nome" ></InputComponent>
                                <InputComponent labelType = "text" labelText="Sobrenome" ></InputComponent>
                            </Stack>
                        </div>

                        <div className={styles.row} > {/* Adicionando margem vertical com a classe 'my-3' */}
                            <Stack direction="horizontal" gap={1}>
                                <InputComponent width="200px" labelType = "text" labelText="Email" ></InputComponent>
                            </Stack>
                        </div>

                        <div className={styles.row}> {/* Adicionando margem vertical com a classe 'my-3' */}
                            <Stack direction="horizontal" gap={2}>
                                <InputComponent labelType = "date" labelText="Data Nascimento" ></InputComponent>
                                <InputComponent labelType = "text" labelText="CPF" ></InputComponent>
                            </Stack>
                        </div>

                        <div className={styles.row}> {/* Adicionando margem vertical com a classe 'my-3' */}
                            <Stack direction="horizontal" gap={1}>
                                <InputComponent labelType = "password" labelText="Senha" ></InputComponent>
                            </Stack>
                        </div>

                        <div className={styles.row}> {/* Adicionando margem vertical com a classe 'my-3' */}
                            <Stack direction="horizontal" gap={3}>
                                <InputComponent labelType = "password" labelText="Confirme Senha" ></InputComponent>
                            </Stack>
                        </div>
                    </Container>
                </div>

            </main>
        </>
    );
}