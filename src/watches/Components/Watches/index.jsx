import React from 'react';
import Moment from 'moment';

import WatchesItem from '../WatchesItem';

import './style.css';

class Watches extends React.Component {

  constructor(props) {
    super(props);

    this.clocksCount = 1;
    this.state = {
      inputName: '',
      inputUtc: '',
      timers: [{
         name: 'Msk',
         utc: '3',
         date: '',
         id: this.clocksCount
      }]
    }
  }

  componentDidMount() {
    this.timer = setInterval(() => {
      const newTimers = this.state.timers.map((item) => {
        return {
          ...item,
          date: Moment().utcOffset(Number(item.utc)).format('HH:mm:ss'),
        }
      })

      this.setState({ timers: newTimers });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    return (
      <div  className='container'>
      <form className='inputs' onSubmit={this.onSubmitForm}>
         <div>
           <label htmlFor='name' className='label__name'>Название</label>
           <input
             type='text'
             className='input__text'
             value={this.state.inputName}
             onChange={this.onChangeInput}
             name='inputName'
           />
         </div>
        <div>
          <label htmlFor='area' className='label__name'>Часовая зона</label>
          <input
            type='number'
            className='input__text'
            value={this.state.inputUtc}
            onChange={this.onChangeInput}
            name='inputUtc'
          />
        </div>
          <div><button className='button' type='submit'>Отправить</button></div>
      </form>
          {this.state.timers.map((item) => {
            return (
              <WatchesItem
                name={item.name}
                date={item.date}
                key={item.id}
                onDelete={this.onDeleteClock}
                id={item.id}
              />
            )
          })}
      </div>
    )
  }

  onChangeInput = (e) => {
    const { name, value } = e.target;

    this.setState({ [name]: value });
  }

  onSubmitForm = (e) => {
    e.preventDefault();
    this.clocksCount++;

    const newTimers = [...this.state.timers];
    newTimers.push({
      name: this.state.inputName,
      utc: this.state.inputUtc,
      id: this.clocksCount
    });
    this.setState({ timers: newTimers });
  }

  onDeleteClock = (e) => {
    const id = Number(e.target.dataset.id);
    const newTimers = [...this.state.timers];
    const findIndex = newTimers.findIndex((item) => item.id === id);

    newTimers.splice(findIndex, 1);
    this.setState({ timers: newTimers });
  }
}

export default Watches;
