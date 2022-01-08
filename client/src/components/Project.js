import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';
// import { Rating } from './Rating';

export const Project = ({ project }) => {
    return (
        <Card className="my-3 p-3 rounded">
            <Link to={`/01project2022/${project._id}`}>
                <Card.Img src={project.image} variant='top' />
            </Link>

            <Card.Body>

                <Card.Text as='h3'>
                    {project.name}
                </Card.Text>
                <Link to={`/01project2022/${project._id}`}>
                    <Card.Title as='div'>
                        <strong>{project.name}</strong> (link)
                    </Card.Title>
                </Link>

                <Card.Text as='div'>
                    {/* <Rating value={project.name} text={`${project.name} reviews`} /> */}
                    <h6>Technologies Used:</h6>
                    {project.technologies}
                </Card.Text>



            </Card.Body>

        </Card>
    )
}
