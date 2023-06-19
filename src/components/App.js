
import React, { useState } from "react";
import './../styles/App.css';

export default function App() {
  let [gender, setGender] = useState("Male");
  return (
    <div>
      <h1>Select your gender:</h1>
      <input
        onClick={(e) => setGender(e.target.value)}
        type="radio"
        id="male"
        name="gender"
        value="male"
      />
      <label for="male">Male</label>
      <input
        onClick={(e) => setGender(e.target.value)}
        type="radio"
        id="female"
        name="gender"
        value="female"
      />
      <label for="female">Female</label>
      {/* Do not remove the main div */}

      {gender === "male" ? (
        <>
          <h2 for="shirts">Select your shirt size:</h2>
          <select name="size" id="size">
            <option value="Select size" disabled>
              Select size
            </option>
            <option value="small">Small</option>
            <option value="medium">Medium</option>
            <option value="large">Large</option>
          </select>
        </>
      ) : (
        <>
          <h2 for="dress">Select your dress size:</h2>
          <select name="size" id="size">
            <option value="Select size" disabled>
              Select size
            </option>
            <option value="two">2</option>
            <option value="four">4</option>
            <option value="six">6</option>
          </select>
        </>
      )}
    </div>
  );
}


// const App = () => {
//   return (
//     <div>
//       <h1>Hello</h1>
//     </div>
//   );
// }

// export default App
