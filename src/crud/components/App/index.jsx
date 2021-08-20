import React, { useState, useEffect } from 'react';

import './style.css';

const AppCrud = () => {
  const [data, setData] = useState(null);
  const [inputValue, setInputValue] = useState('');

  const url = 'http://localhost:7777/notes';
  const getData  = async () => {
    const response = await fetch(url);
    const resp = await response.json();

    setData(resp);
  }

  useEffect(() => {
    void getData()
  }, []);

  const onChangeInput = (e) => {
    setInputValue(e.target.value);
  }

  const onFormSubmit = async (e) => {
    e.preventDefault();

    await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify({ content: inputValue })
    });

    await getData();

  }

  const onDelete = (e) => {
    const id = e.target.dataset.id;

    fetch(`${url}/${id}`, {
      method: 'DELETE'
    }).then(getData)
  }

  return (
    <div className='main__container'>
      <div>
        <div>Notes</div>
        <span className='icon__update' onClick={getData} />
      </div>
      <div className='container__crud'>
        <form className='form' onSubmit={onFormSubmit}>
          <div><label htmlFor='note'>New note</label></div>
          <div><textarea
            rows='6'
            cols='30'
            id='note'
            name='Note'
            value={inputValue}
            onChange={onChangeInput}
          />
          </div>
          <div><button type='submit'>Отправить</button></div>
        </form>
        <div className='items__container'>
          {data && data.map((item) => {
            return (
              item?.content && (
                <div key={item.id} className='item__content'>
                  {item.content}
                  <span className='icon-delete' onClick={onDelete} data-id={item.id} />
                </div>
              )
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default AppCrud;
