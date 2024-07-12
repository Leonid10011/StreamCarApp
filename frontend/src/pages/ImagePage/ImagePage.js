import LinkCard from "features/DataManagement/components/LinkCard/LinkCard";
import MenuContainer from "features/DataManagement/components/MenuContainer/MenuContainer";
import { Col, Row } from "react-bootstrap";

const ImagePage = ({type}) => {

    return (
        <MenuContainer title={"Bilder " + (type==="add" ? "Hinzufügen" : "Verwalten")}>
            <Col>
                <Row xs={1} md={1} className="g-3">
                    <Col key={1}>
                        <LinkCard link={"/images/"+ type + "/guess"} imgsrc={"/holder.png"} title={"Bilder Erraten"} description={""} />
                    </Col>  
                </Row>
            </Col>
        </MenuContainer>
    )
}

export default ImagePage;