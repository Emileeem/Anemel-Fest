import styles from "./style.module.css"
import Form from 'react-bootstrap/Form';

export default function InputComponent({ labelText }) {
    return (
      <>
        <Form.Control type="text" placeholder={labelText} className={styles.input_type}/>
      </>
    );
  }