import LinkCard from "features/DataManagement/components/LinkCard/LinkCard";
import MenuContainer from "features/DataManagement/components/MenuContainer/MenuContainer";
import { Col, Row } from "react-bootstrap";


const AddDataPage = () => {

    return(
        <MenuContainer title={"Daten Hinzufügen"}>
            <Col>
                <Row xs={1} md={3} className="g-3">
                    <Col key={1}>
                        <LinkCard link={"/questions/add"} imgsrc={"./holder.png"} title={"Fragen"} description={"Neue Fragen hinzufügen für Allgmeinwissen, Private Fragen oder Schaetzfragen"} />
                    </Col>
                    <Col key={2}>
                        <LinkCard link={"/images/add"} imgsrc={"./holder.png"} title={"Bilder"} description={"Neue Bilder hinzufügen für Bilder erraten"} /> 
                    </Col>
                    <Col key={3}>
                        <LinkCard link={"/videos/add"} imgsrc={"./holder.png"} title={"Videos"} description={"Neue youtubelinks hinzufügen für Alle Gegen Alle"} />
                    </Col>    
                </Row>
            </Col>
        </MenuContainer>
    )
}

export default AddDataPage;