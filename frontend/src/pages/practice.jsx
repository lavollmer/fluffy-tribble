import React, { useState } from 'react';
import axios from 'axios';

const Practice = () => {
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
      e.preventDefault();
      alert(`The medication you entered was ${name}`);
  }

  return (
      <>
          <div>
              <form onSubmit={handleSubmit}>
                  <div>
                      <label>Enter medication name:
                          <input
                              type='text'
                              id='name'
                              name='name'
                              value={name}
                              onChange={(e) => setName(e.target.value)} />
                      </label>
                  </div>
                  <button type="submit">Submit</button>
              </form>
          </div>
      </>
  );
}

export default Practice;