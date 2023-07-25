import React from 'react';

const Currency = () => {

    return (
        <div className='alert alert-secondary'>
            <span>Currency</span>
          <select>
            <option defaultValue>Choose...</option>
            <option> $ Dollar</option>
            <option> £ Pound</option>
            <option> € Euro</option>
            <option> ₹ Ruppee</option>
          </select>
        </div>
    );
};



export default Currency;