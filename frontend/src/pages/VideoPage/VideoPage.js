import LinkCard from "features/DataManagement/components/LinkCard/LinkCard";
import MenuContainer from "features/DataManagement/components/MenuContainer/MenuContainer";
import { Col, Row } from "react-bootstrap";

const VideoPage = ({ type }) => {
  return (
    <MenuContainer
      title={"Videos " + (type === "add" ? "Hinzufügen" : "Verwalten")}
    >
      <Col>
        <Row xs={1} md={1} className="g-3">
          <Col key={1}>
            <LinkCard
              link={"/videos/" + type + "/zoom"}
              imgsrc={"/holder.png"}
              title={"Zoom Videos"}
              description={""}
            />
          </Col>
        </Row>
      </Col>
    </MenuContainer>
  );
};

export default VideoPage;
