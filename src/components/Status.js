import React, {PropTypes} from 'react';

import {Row, Col} from 'react-bootstrap';
import {grey600, grey300} from 'material-ui/styles/colors';

const Status = (props) => (
    <div style={{
        backgroundColor: grey300, paddingTop: 5,
        paddingBottom: 5,
    }}>
        <Row>
            <Col md={5}>
                <strong>Status</strong>
            </Col>
            <Col md={2}>
                <strong>Door</strong>
            </Col>
            <Col md={5}>
                <strong>Om</strong>
            </Col>
        </Row>
        <Row>
            <Col md={5}>
                <span>&bull;</span>{props.status && props.status}
            </Col>
            <Col md={2}>
                {props.assignee && props.assignee.name}
            </Col>
            <Col md={5}>
                {props.assignedAtTime && props.assignedAtTime}
                <span style={{color: grey600}}>{' ('}
                    {props.assignedAtDate && props.assignedAtDate}
                    {')'}</span> <br/>
            </Col>
        </Row>
    </div>
);
Status.propTypes = {
    status: PropTypes.string.isRequired,
    assignee: PropTypes.object.isRequired,
    assignedAtTime: PropTypes.string.isRequired,
    assignedAtDate: PropTypes.string.isRequired,
};

export default Status;