import React, { useState } from "react";

const Input = () => {
   const [value, setValue] = useState('Hello wold!!!')

   return (
      <div>
         <h1>{value}</h1>
         <input
            type="text"
            value={value}
            onChange={event => setValue(event.target.value)}
         />
      </div>
   );
}

export default Input;