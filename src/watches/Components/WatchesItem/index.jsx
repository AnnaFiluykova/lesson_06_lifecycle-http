import React from 'react';
import PropTypes from 'prop-types';

// const getTimeNum = (time) => {
//   if (time < 10) {
//     return '0' + time;
//   }
//   return time;
// }

// const getCurrentTime = (utc) => {
//   const hour = getTimeNum(date.getHours());
//   const min = getTimeNum(date.getMinutes());
//   const sec = getTimeNum(date.getSeconds());
//
//   return hour + ":" + min + ":" + sec;
// }

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
