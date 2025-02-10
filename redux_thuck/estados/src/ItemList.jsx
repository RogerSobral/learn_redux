import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchItems } from './actions';

const ItemList = ({ items, fetchItems }) => {
  useEffect(() => {
    fetchItems();
  }, [fetchItems]);

  return (
    <div>
      <h1>Items</h1>
      <ul>
        {items.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
};

const mapStateToProps = (state) => ({
  items: state.items.items,
});

export default connect(mapStateToProps, { fetchItems })(ItemList);