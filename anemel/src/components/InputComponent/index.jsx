import styles from "./style.module.css"
import Form from 'react-bootstrap/Form';

export default function InputComponent({ labelText, labelType }) {
    return (
      <>
       <div style={{ display: 'block', width: '10px'}}>
        <label htmlFor={labelText}>{labelText}</label>
      </div>
        <Form.Control type={labelType} placeholder={labelText} className={styles.input_type}/>
      </>
    );
  }