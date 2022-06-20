import React, { useState } from "react";

const InputTime = () => { 
   const [time, setTime] = useState('00:00')

   return (
      <div>
         <h1>{time}</h1>
         <input
         type="time"
         onChange={event => setTime(event.target.value)}
         />
      </div>
   );
}

export default InputTime;