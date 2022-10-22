import React, { useEffect, useState } from 'react';
import DinnerItem from './DinnerItem';

const Dinner = () => {
    const [dinnerFood,setDinnerFood] = useState();
    useEffect(()=>{
        fetch('http://localhost:5000/dinner')
        .then(res=>res.json())
        .then(data=>setDinnerFood(data));
    },[])
    return (
        <div>
           <div className='grid grid-cols-3 gap-10 px-24 mt-16'>
           {
                dinnerFood?.map((dinner,index)=><DinnerItem
                    key={index}
                    dinner={dinner}
                ></DinnerItem>)
            }
           </div>

        </div>
    );
};

export default Dinner;