import React from "react";
import Counter from "./components/Counter";
import InputCheckbox from "./components/InputCheckbox";
import Input from "./components/Input";
import InputTime from "./components/InputTime";

function App() {

  return (
    <div className="App">
      <Counter />
      <Input />
      <InputCheckbox />
      <InputTime />
    </div>
  );
}

export default App;
