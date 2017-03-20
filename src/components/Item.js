//stateless component
//receives one item to be rendered.
import React, {PropTypes} from 'react';

import {Row, Col} from 'react-bootstrap';
import NavigationChevronRight from 'material-ui/svg-icons/navigation/chevron-right';
import CheckBox from 'material-ui/svg-icons/toggle/check-box';
import CheckBoxOutline from 'material-ui/svg-icons/toggle/check-box-outline-blank';
import {yellowA700, black, grey500} from 'material-ui/styles/colors';
import IconButton from 'material-ui/IconButton';
import Divider from 'material-ui/Divider';

const Item = (props) => {
    const toggle = () =>{
        props.toggleItemStatus(props.id);
    };

    return (
        <div>
            <Row style={{verticalAlign: 'middle'}}>
                <Col md={1} style={{verticalAlign: 'middle'}}>
                    <IconButton onClick={toggle}>
                        {props.status ==='NEW'?<CheckBoxOutline color={yellowA700}/>:<CheckBox color={yellowA700}/>}

                    </IconButton>
                </Col>
                <Col md={3}>
                    <div style={{width: '75px', height: '75px', overflow: 'hidden'}}>
                        <img
                            alt={props.product && props.product.name}
                            style={{
                                maxWidth: '100%',
                                height: 'auto',
                            }}
                            src={'../assets/' + props.product.imageUrl}/>
                    </div>
                </Col>
                <Col md={6}>
                    <strong>
                        {props.product && props.product.name}
                    </strong><br/>
                    <span style={{color: grey500}}>
                {props.product && props.product.description}
            </span>
                </Col>
                <Col md={2}>
                    <IconButton >
                        <NavigationChevronRight color={black}/>
                    </IconButton>
                </Col>
            </Row>
            <Divider/>
        </div>
    );
}

Item.propTypes = {
    product: PropTypes.object.isRequired,
    id: PropTypes.number.isRequired,
    status: PropTypes.string.isRequired,
    toggleItemStatus: PropTypes.func
};

export default Item;