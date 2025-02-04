import { useEffect, useRef } from "react";
import { Col, Form } from "react-bootstrap";
import styles from "./InputArea.module.css";

const InputArea = ({ data, setData, ...props }) => {
  const lineNumbersRef = useRef(null);

  useEffect(() => {
    const textarea = lineNumbersRef.current;

    const updateLineNumbers = (list, ref) => {
      if (ref && list) {
        const lines = list.length;
        ref.value = Array.from({ length: lines }, (_, i) => i + 1).join("\n");
      }
    };

    updateLineNumbers(data, textarea);
  }, [data]);

  const handleScroll = (e, ref) => {
    const lineNumbers = ref.current;
    lineNumbers.scrollTop = e.target.scrollTop;
  };

  return (
    <Col className={`${styles.textareaContainer} p-0`}>
      <textarea className={styles.lineNumbers} ref={lineNumbersRef} readOnly />
      <Form.Control
        className={styles.textArea}
        as="textarea"
        placeholder={props.ph ? props.ph : "Format: Jede Zeile eine Frage"}
        value={data}
        onChange={(e) => setData(e.target.value)}
        onScroll={(e) => handleScroll(e, lineNumbersRef)}
      />
    </Col>
  );
};

export default InputArea;
