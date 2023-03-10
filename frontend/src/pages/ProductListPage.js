// import { useParams } from "react-router-dom"
import React from "react";
import { Row, Col, Container, ListGroup, Button } from "react-bootstrap";
import ListGroupItem from 'react-bootstrap/esm/ListGroupItem';
import PaginationComponent from "../components/PaginationComponent.js";
import SortOptionsComponent from "../components/SortOptionsComponent.js";
import ProductForListComponent from "../components/ProductForListComponent.js";
import PriceFilterComponent from "../components/filterQueryResultOptions/PriceFilterComponent.js";
import RatingFilterComponent from "../components/filterQueryResultOptions/RatingFilterComponent.js";
import CategoryFilterComponent from "../components/filterQueryResultOptions/CategoryFilterComponent.js";
import AttributesFilterComponent from "../components/filterQueryResultOptions/AttributesFilterComponent.js";

const ProductListPage = () => {

    return (
        <Container fluid>
            <Row>
                <Col md={3}>
                    <ListGroup variant="flush">
                        <ListGroup.Item className="mb-3 mt-3">
                            <SortOptionsComponent />
                        </ListGroup.Item>
                        <ListGroup.Item>
                            FILTER: <br />
                            <PriceFilterComponent />
                        </ListGroup.Item>
                        <ListGroup.Item><RatingFilterComponent />
                        </ListGroup.Item>
                        <ListGroup.Item><CategoryFilterComponent />
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <AttributesFilterComponent />
                        </ListGroup.Item>
                        <ListGroupItem>
                            <Button variant="primary">Filter</Button>
                            <Button variant="danger">Reset filters</Button>
                        </ListGroupItem>
                    </ListGroup>
                </Col>
                <Col md={9}>
                    {Array.from({ length: 5 }).map((_, idx) => (
                        <ProductForListComponent
                            key={idx}
                            images={["games", "monitors", "tablets", "games", "monitors"]}
                            idx={idx}
                        />
                    ))}
                    <PaginationComponent />
                </Col>
            </Row>
        </Container>
    );
};

export default ProductListPage;