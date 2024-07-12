import { useEffect, useRef } from "react";
import { Col, Form } from "react-bootstrap";
import "./InputArea.css";

const InputArea = ({ data, setData, ...props }) => {
  const lineNumbersRef = useRef(null);

  useEffect(() => {
    const textarea = lineNumbersRef.current;
    console.log("Data", data);
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
    <Col className="textarea-container p-0">
      <textarea className="line-numbers" ref={lineNumbersRef} readOnly />
      <Form.Control
        className="text-area"
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
