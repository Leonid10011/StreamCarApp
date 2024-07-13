import ImageRow from "features/DataManagement/components/CategoryModules/Images/AddImages/ImageRow/ImageRow";
import ImageUploadForm from "features/DataManagement/components/CategoryModules/Images/AddImages/ImageUploadForm";
import { Col, Container, Row } from "react-bootstrap";
import styles from "./AddImages.module.css";

const AddImagesForm = ({ acceptedFiles, setAcceptedFiles }) => {
  return (
    <Container>
      <Row>
        <Col>
          <ImageUploadForm
            acceptedFiles={acceptedFiles}
            setAcceptedFiles={setAcceptedFiles}
          />
        </Col>
        <Col>
          {acceptedFiles.length > 0 && (
            <div className={`${styles.scrollableList} mt-3`}>
              {acceptedFiles.map((file) => (
                <ImageRow
                  key={file.name}
                  file={file}
                  onClick={() => {}}
                  onDelete={() => {}}
                />
              ))}
            </div>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default AddImagesForm;
