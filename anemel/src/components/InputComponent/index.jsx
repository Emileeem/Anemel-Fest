import styles from "./style.module.css"
import Form from 'react-bootstrap/Form';

export default function InputComponent() {
    return (
      <>
        <Form.Control type="text" placeholder="Normal text" className={styles.input_type}/>
      </>
    );
  }