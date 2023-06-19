
import React from "react";
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
      <label for="male">Male</label>
      <input onClick={() => genderHandler("Female")} type="radio" id="female" name="female" value="Female" />
      <label for="female">Female</label>
      {/* Do not remove the main div */}
      <label for="shirts">Select your shirt size:</label>
      {
        gender === "Male" ? (
          <select name="shirtForMale" id="shirts">
            <option value="select_size">Select size</option>
            <option value="small">Small</option>
            <option value="medium">Medium</option>
            <option value="large">Large</option>
          </select>
        ) : (
          <select name="shirtForFemale" id="shirts">
            <option value="select_size">Select size</option>
            <option value="2">2</option>
            <option value="4">4</option>
            <option value="6">6</option>
          </select>
        )
      }
    </div>
  )
}

export default App
