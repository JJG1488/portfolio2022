import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Row, Col } from 'react-bootstrap';
import { Project } from '../components/Project';
import { listProjects } from '../actions/projectActions.js';
import Message from '../components/Message';
import { Loader } from '../components/Loader';

export const HomeScreen = () => {
    const dispatch = useDispatch();
    const projectList = useSelector(state => state.projectList);

    const { loading, error, projects } = projectList;

    useEffect(() => {
        dispatch(listProjects());
    }, [dispatch])

    return (
        <>
            <h1>Latest Projects</h1>
            {loading ? <Loader /> : error ? <Message variant='danger' /> : <Row>
                {projects.map(project => (
                    <Col key={project._id} sm={12} md={6} lg={4} xl={3}>
                        <Project project={project} />
                    </Col>
                ))}
            </Row>}

        </>
    )
}
