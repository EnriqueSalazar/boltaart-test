//stateless component
//receives list of items, iterates through them and renders Item for each
import React, {PropTypes} from 'react';
import Item from '../components/Item';

const ItemsList = (props) => (
    <div style={{
        paddingTop: 5,
        paddingBottom: 5,
    }}>
        {
            props.items && props.items.map(item =>
                <Item
                    key={item.id}
                    id={item.id}
                    status={item.status}
                    product={item.product}
                    toggleItemStatus={props.toggleItemStatus}
                />)
        }
    </div>
);
ItemsList.propTypes = {
    items: PropTypes.array.isRequired,
    toggleItemStatus: PropTypes.func
};

export default ItemsList;