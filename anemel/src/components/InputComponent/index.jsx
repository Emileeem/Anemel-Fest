import styles from "./style.module.css"
import Form from 'react-bootstrap/Form';

export default function InputComponent({ labelText, labelType }) {
    return (
      <>
        <Form.Control type={labelType} placeholder={labelText} className={styles.input_type}/>
      </>
    );
  }