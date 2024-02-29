// child component of App.jsx displaying a form with
// inputs for user investment data. It will collect data
// in state and pass to App.jsx for processing.

import { useState } from 'react';
import { formatter, calculateInvestmentResults } from '../util/investment';

export default function Form({ dataRetrieval }) {
  const [userInputData, setUserInputData] = useState({
    'initial Investment': '',
    'annual Investment': '',
    'expected Return': '',
    'duration': '',
  });
  console.log(userInputData);

  const keysArray = Object.keys(userInputData);

  const handleUserInput = (e) => {
    setUserInputData(prevState => ({
      ...prevState,
      [e.target.name]: Number(e.target.value)
    }));

    console.log(calculateInvestmentResults(userInputData));
  }

    return (
    <div id="user-input">
        <form className="input-group center">
          {keysArray && keysArray.map((objKey, index) => {
            return (
              <div key={index}>
                <label htmlFor={objKey}>{objKey}</label>
                <input
                  type="number"
                  step={objKey === 'duration' || objKey === 'expected Return' ? 1 : 100}
                  id={objKey}
                  name={objKey}
                  value={userInputData[objKey]}
                  onChange={(e) => handleUserInput(e)}
                />
              </div>
            );
          })}
        </form>
      </div>
  )
}