import ImageFrame from "features/DataManagement/components/ImageFrame/ImageFrame";
import ListContainer from "features/DataManagement/components/ListComponent/ListContainer/ListContainer";
import { Col, Container, Row } from "react-bootstrap";

const ManageImagesContent = ({
  items,
  currentItem,
  handleDelete,
  handleClick,
}) => {
  return (
    <Container>
      <Row>
        <Col>
          <ListContainer
            items={items}
            currentItem={currentItem}
            handleDelete={handleDelete}
            handleClick={handleClick}
          />
        </Col>
        <Col xs={6} md={4}>
          <ImageFrame url={currentItem?.location} />
        </Col>
      </Row>
    </Container>
  );
};

export default ManageImagesContent;
