import React, { useState } from 'react';

const Temp = () => {
    // const [tempShadow,setTempShadow] = useState('');
    const [isActive,setIsActive] = useState(false);
    const handleTempShadow = ()=>{
        

        // setTempShadow("temp-shadow");
        setIsActive(!!true);
        console.log('clicked temp');
    }
    return (
        <div onClick={()=>handleTempShadow()}>
            <div 
                style={{
                    boxShadow:isActive?'rgba(149, 157, 165, 0.2) 0px 8px 24px':''
                }}
            >
            <h1 className="text-2xl my-20">Temporary Text</h1><br />
            <h1 className="text-2xl my-20">Temporary Text</h1>
            <h1 className="text-2xl my-20">Temporary Text</h1>
            </div>
            
        </div>
    );
};

export default Temp;