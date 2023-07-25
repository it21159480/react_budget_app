import React, { useContext , useState } from 'react';
import { AppContext } from '../context/AppContext';
const Budget = () => {
    const { expenses, dispatch  } = useContext(AppContext);
    

    function mssg (event) {
        // const bg = event.target.value
        // if(bg > 20000){
        //     console.log("it is work")
        //     alert("The value cannot exceed £20000");    
        // }
        // if (bg < expenses) {

        //     alert("The value cannot lower than expenses funds  £"+ expenses);  
        // }
        
        const budget = {
            bdg : event.target.value,
        }

        dispatch({
            type: 'SET_BUDGET',
            payload: budget,
        });

        
    }
    

    return (
        <div className='alert alert-secondary'>
            <span>Budget: £<input type='number' onChange={mssg}  /></span>
        </div>
    );
};
export default Budget;

