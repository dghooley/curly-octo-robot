// import { useParams } from "react-router-dom"
import { Row, Col, Container, ListGroup, Button } from "react-bootstrap";
import ListGroupItem from 'react-bootstrap/esm/ListGroupItem';
// import PaginationComponent from "../components/PaginationComponent.js";
// import SortOptionsComponent from "../components/SortOptionsComponent.js";
// import ProductForListComponent from "../components/ProductForListComponent.js";
// import PriceFilterComponent from "../components/filterQueryResultOptions/PriceFilterComponent.js";
// import RatingFilterComponent from "../components/filterQueryResultOptions/RatingFilterComponent.js";
// import CategoryFilterComponent from "../components/filterQueryResultOptions/CategoryFilterComponent.js";
// import AttributesFilterComponent from "../components/filterQueryResultOptions/AttributesFilterComponent.js";

const ProductListPage = () => {
    //     const { id } = useParams();
    //    console.log(id);
    return (
        <Container fluid>
            <Row>
                <Col md={3}>
                    <ListGroup variant="flush">
                        <ListGroup.Item>{/* <SortOptionsComponent /> */}</ListGroup.Item>
                        <ListGroup.Item>{/* <PriceFilterComponent /> */}</ListGroup.Item>
                        <ListGroup.Item>{/* <RatingFilterComponent /> */}</ListGroup.Item>
                        <ListGroup.Item>{/* <CategoryFilterComponent /> */}</ListGroup.Item>
                        <ListGroup.Item>{/* <AttributesFilterComponent /> */}</ListGroup.Item>
                        <ListGroupItem>
                            <Button variant="primary">Primary</Button>
                            <Button variant="danger">Danger</Button>
                        </ListGroupItem>
                    </ListGroup>
                </Col>
                <Col md={9}>
                    {/* <ProductForListComponent /> */}
                    {/* <PaginationComponent /> */}
                </Col>
            </Row>
        </Container>
    );
};

export default ProductListPage