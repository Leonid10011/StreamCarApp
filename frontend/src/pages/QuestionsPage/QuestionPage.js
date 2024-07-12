import LinkCard from "features/DataManagement/components/LinkCard/LinkCard";
import MenuContainer from "features/DataManagement/components/MenuContainer/MenuContainer";
import { Col, Row } from "react-bootstrap";

const QuestionPage = ({type}) => {

    return (
        <MenuContainer title={"Fragen " + (type!=="add" ? "Hinzufügen" : "Verwalten")}>
            <Col>
                <Row xs={1} md={2} className="g-3">
                    <Col key={1}>
                        <LinkCard link={"/questions/"+ type + "/general"} imgsrc={"/holder.png"} title={"Allgemein"} description={"Fragen für die Kategorie Allgemeinwissen."} />
                    </Col>
                    <Col key={2}>
                        <LinkCard link={"/questions/"+ type + "/private"} imgsrc={"/holder.png"} title={"Privat"} description={"Fragen für die Kategorie Private Fragen"} /> 
                    </Col>
                    <Col key={3}>
                        <LinkCard link={"/questions/"+ type + "/estimate"} imgsrc={"/holder.png"} title={"Schaetzfragen"} description={"Fragen für die Kategorie Alle Gegen Alle."} />
                    </Col>    
                </Row>
            </Col>
        </MenuContainer>
    )
}

export default QuestionPage;