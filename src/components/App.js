
import React, { useState } from "react";
import './../styles/App.css';

const App = () => {
  let [gender, setGender] = useState("");

  function genderHandler(gen) {
    setGender(gen);
  }

  return (
    <div>
      <h1>Select your gender:</h1>
      <input onClick={() => genderHandler("Male")} type="radio" id="male" name="male" value="Male" />
      <h2 for="male">Male</h2>
      <input onClick={() => genderHandler("Female")} type="radio" id="female" name="female" value="Female" />
      <h2 for="female">Female</h2>
      {/* Do not remove the main div */}

      {
        gender === "Male" ? (
          <>
            <label for="shirts">Select your shirt size:</label>
            <select name="shirtForMale" id="shirts">
              <option value="select_size">Select size</option>
              <option value="small">Small</option>
              <option value="medium">Medium</option>
              <option value="large">Large</option>
            </select>
          </>

        ) : (
          <>
            <label for="dress">Select your dress size:</label>
            <select name="shirtForFemale" id="dress">
              <option value="select_size">Select size</option>
              <option value="2">2</option>
              <option value="4">4</option>
              <option value="6">6</option>
            </select>
          </>

        )
      }
    </div>
  )
}

// const App = () => {
//   return (
//     <div>
//       <h1>Hello</h1>
//     </div>
//   );
// }

export default App
