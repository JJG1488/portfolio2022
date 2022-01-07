import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Row, Col, Image, ListGroup } from 'react-bootstrap';
// import { Rating } from '../components/Rating';
// import projects from '../projects';
import axios from 'axios';
import './styles.css';

export const ProjectScreen = () => {

    const { id } = useParams();
    const [project, setProducts] = useState({});

    useEffect(() => {
        const fetchProduct = async () => {
            const { data } = await axios.get(`/api/projects/${id}`);
            // console.log(data)
            setProducts(data);
        }
        fetchProduct()
    }, [id])


    return (
        <>
            <Link className='btn btn-dark my-3' to='/'>Go Back</Link>
            <Row>
                <Col md={6}>
                    <Image src={project.image} alt={project.name} fluid></Image>
                </Col>
                <Col md={3}>
                    <ListGroup variant='flush'>
                        <ListGroup.Item>
                            <h3>{project.name}</h3>
                        </ListGroup.Item>
                        {/* <ListGroup.Item>
                            <Rating
                                value={`${project.name}`}
                                text={`${project.name} reviews`} />
                        </ListGroup.Item> */}
                        <ListGroup.Item>
                            <h4>Website:</h4> <a href={project.url} alt={project.name}>(<mark className='website-link'>Click here to see!</mark>)</a>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <h4>Description:</h4> {project.description}
                        </ListGroup.Item>
                    </ListGroup>

                </Col>
                <Col md={3}>
                    {/* <Card>
                        <ListGroup.Item variant='flush'>
                            <Row>
                                <Col>
                                    Status:
                                </Col>
                                <Col>
                                    {project.name > 0 ? 'In Stock' : 'Out Stock'}
                                </Col>
                                <Col>
                                    <strong>${project.name}</strong>
                                </Col>
                            </Row>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Button className='btn-block' type='button' disabled={project.name === 0}>
                                Add to Cart
                            </Button>
                        </ListGroup.Item>
                    </Card> */}
                </Col>
            </Row>
        </>
    )
}
