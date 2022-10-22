import React, { useEffect, useState } from 'react';
import BreakfastItem from './BreakfastItem';

const Breakfast = () => {
    const [breakfastFood,setBreakfastFood] = useState();
    useEffect(()=>{
        fetch('http://localhost:5000/breakfast')
        .then(res=>res.json())
        .then(data=>setBreakfastFood(data));
    },[])
    return (
        <div>
           <div className='grid grid-cols-3 gap-10 px-24 mt-16'>
           {
                breakfastFood?.map((breakfast,index)=><BreakfastItem
                    key={index}
                    breakfast={breakfast}
                ></BreakfastItem>)
            }
           </div>

        </div>
    );
};

export default Breakfast;