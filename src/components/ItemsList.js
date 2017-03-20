import React, {PropTypes} from 'react';
import Item from '../components/Item';

const ItemsList = (props) => (
    <div style={{
        paddingTop: 5,
        paddingBottom: 5,
    }}>
        {
            props.items && props.items.map(item =>
                <Item key={item.id} product={item.product}/>)
        }
    </div>
);
ItemsList.propTypes = {
    items: PropTypes.array.isRequired,
};

export default ItemsList;