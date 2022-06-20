import React, { useState } from "react";

const InputCheckbox = () => { 
   const [checked, setChecked] = useState(true)

   return (
      <div>
         <h1>{checked ? 'ok':'fail'}</h1>
         <input
         type="checkbox"
         checked={checked}
         onChange={() => setChecked(!checked)}
         />
      </div>
   );
}

export default InputCheckbox;