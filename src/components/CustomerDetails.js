import React, {PropTypes} from 'react';

const CustomerDetails = (props) => (
    <div style={{
        paddingTop: 5,
        paddingBottom: 5,
    }}>
        <strong>Aangevraagd om: </strong>
        {props.placedAtTime && props.placedAtTime}
        {' ('}
        {props.placedAtDate && props.placedAtDate}
        {')'}<br/>
        <strong>Email: </strong> {props.customer && props.customer.email}<br/>
        <strong>Telefoon: </strong>{props.customer && props.customer.phoneNumber}
    </div>
);
CustomerDetails.propTypes = {
    customer: PropTypes.object.isRequired,
    placedAtTime: PropTypes.string.isRequired,
    placedAtDate: PropTypes.string.isRequired,
};

export default CustomerDetails;