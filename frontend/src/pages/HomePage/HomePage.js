import { Col, Container, Row } from "react-bootstrap";
import { useEffect } from "react";
import "./HomePage.css";
import useLocalFetch from "hooks/useLocalFetch";
import MenuContent from "features/DataManagement/components/MenuContainer/MenuContent/MenuContent";
import LinkCard from "features/DataManagement/components/LinkCard/LinkCard";
import UpdateNotification from "features/QuizModule/components/UpdateNotification/UpdateNotification";

const HomePage = () => {
  const { firstInit } = useLocalFetch();

  useEffect(() => {
    firstInit();
  }, []);

  return (
    <MenuContent title={"Hauptseite"}>
      <Container
        className="d-flex justify-content-center align-items-center"
        fluid
      >
        <Row>
          <Col className="text-center">
            <Row xs={1} md={1} lg={1} className="g-4">
              <Col>
                <LinkCard
                  link={"/quizmodule"}
                  imgsrc={"./holder.png"}
                  title={"Quizmodul Starten"}
                  description={""}
                />
              </Col>
              <Col>
                <LinkCard
                  link={"/addData"}
                  imgsrc={"./holder.png"}
                  title={"Daten Hinzufügen"}
                  description={""}
                />
              </Col>
              <Col>
                <LinkCard
                  link={"/manageData"}
                  imgsrc={"./holder.png"}
                  title={"Daten Verwalten"}
                  description={""}
                />
              </Col>
            </Row>
          </Col>
          <Col>
            <UpdateNotification />
          </Col>
        </Row>
      </Container>
    </MenuContent>
  );
};

export default HomePage;
