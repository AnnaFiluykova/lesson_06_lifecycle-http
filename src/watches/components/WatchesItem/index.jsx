import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  name: PropTypes.string,
  date: PropTypes.string,
  onDelete: PropTypes.func,
  id: PropTypes.number
}

const WatchesItem = (props) => {
  return (
    <div className='show__time'>
      <div>{props.name}</div>
      <div>{props.date}</div>
      <span className='icon__close' onClick={props.onDelete} data-id={props.id} />
    </div>
  )
}

WatchesItem.propTypes = propTypes;

export default WatchesItem;
