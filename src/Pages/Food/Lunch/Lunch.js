import React, { useEffect, useState } from 'react';
import LunchItem from './LunchItem';

const Lunch = () => {
    const [lunchFood,setLunchFood] = useState();
    useEffect(()=>{
        fetch('http://localhost:5000/lunch')
        .then(res=>res.json())
        .then(data=>setLunchFood(data));
    },[])
    return (
        <div>
           <div className='grid grid-cols-3 gap-10 px-24 mt-16'>
           {
                lunchFood?.map((lunch,index)=><LunchItem
                    key={index}
                    lunch={lunch}
                ></LunchItem>)
            }
           </div>

        </div>
    );
};

export default Lunch;