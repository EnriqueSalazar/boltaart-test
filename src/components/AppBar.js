import React, {PropTypes} from 'react';

import IconButton from 'material-ui/IconButton';
import NavigationChevronLeft from 'material-ui/svg-icons/navigation/chevron-left';
import ActionPrint from 'material-ui/svg-icons/action/print';
import {white, grey800, black, grey500} from 'material-ui/styles/colors';
import {Row, Col} from 'react-bootstrap';

const AppBar = (props) => (
    <div style={{
        paddingTop: 5,
        paddingBottom: 5,
    }}>
        <Row>
            <Col md={1}>
                <IconButton >
                    <NavigationChevronLeft color={black}/>
                </IconButton>
            </Col>
            <Col md={8}>
                <center>
                    <strong>{props.customer && props.customer.name}</strong>
                    <br/>
                    <span style={{color: grey500}}>
                    {props.customer && props.customer.phoneNumber}
                </span>
                </center>
            </Col>
            <Col md={3}>
                <IconButton style={{backgroundColor: grey800}}>
                    <ActionPrint color={white}/>
                </IconButton>
            </Col>
        </Row>
    </div>
);
AppBar.propTypes = {
    customer: PropTypes.object.isRequired,
};

export default AppBar;