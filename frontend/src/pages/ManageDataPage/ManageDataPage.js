import LinkCard from "features/DataManagement/components/LinkCard/LinkCard";
import MenuContainer from "features/DataManagement/components/MenuContainer/MenuContainer";
import { Col, Row } from "react-bootstrap";

const ManageDataPage = () => {

    return(
        <MenuContainer title={"Daten Verwalten"}>
            <Col>
                <Row xs={1} md={3} className="g-3">
                    <Col key={1}>
                        <LinkCard link={"/questions/manage"} imgsrc={"/holder.png"} title={"Fragen"} description={"Fragen ansehen und löschen."} />
                    </Col>
                    <Col key={2}>
                        <LinkCard link={"/images/manage/"} imgsrc={"/holder.png"} title={"Bilder"} description={"Bilder ansehen und löschen."} /> 
                    </Col>
                    <Col key={3}>
                        <LinkCard link={"/videos/manage"} imgsrc={"/holder.png"} title={"Videos"} description={"Videos ansehen und löschen."} />
                    </Col>    
                </Row>
            </Col>
        </MenuContainer>
    )
}

export default ManageDataPage;