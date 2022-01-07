import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

export const Footer = () => {
    return (
        <footer>
            <Container>
                <Row>
                    <Col className="text-center py-3">
                        {/* Copyright &copy; James Gault */}
                        <span className="copyright" id="footer-span">© {new Date().getFullYear()}  James Gault. All Rights Reserved.</span>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

