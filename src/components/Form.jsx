// child component of App.jsx displaying a form with
// inputs for user investment data. It will collect data
// in state and pass to App.jsx for processing.

import { useState } from "react";
import { formatter, calculateInvestmentResults } from "../util/investment";

export default function Form({  }) {
  const [userInputData, setUserInputData] = useState({
    initialInvestment: 10000,
    annualInvestment: 1000,
    expectedReturn: 5,
    duration: 10,
  });

  const keysArray = Object.keys(userInputData);

  const processData = () => {
    const investmentResults = calculateInvestmentResults(userInputData);

    const formattedResults = investmentResults.map((result) => ({
      year: result.year,
      interest: formatter.format(result.interest),
      valueEndOfYear: formatter.format(result.valueEndOfYear),
      annualInvestment: formatter.format(result.annualInvestment),
    }));
  };

  const handleUserInput = (e) => {
    const { name: labelName, value: newValue } = e.target;
    setUserInputData((prevState) => ({
      ...prevState,
      [labelName]: newValue,
    }));

    if (
      Object.values({ ...userInputData, [labelName]: Number(newValue) }).every(
        (value) => value !== ""
      )
    ) {
      console.log("userInputData right before formatting:", userInputData);
      processData();
    }
  };

  return (
    <section id="user-input">
      <div className="input-group center">
        {keysArray &&
          keysArray.map((objKey, index) => {
            const formattedLabel = objKey.replace(/([A-Z])/g, " $1").trim();
            return (
              <div key={index}>
                <label htmlFor={objKey}>{formattedLabel}</label>
                <input
                  required
                  type="number"
                  step={
                    objKey === "duration" || objKey === "expectedReturn"
                      ? 1
                      : 100
                  }
                  id={objKey}
                  name={objKey}
                  value={userInputData[objKey]}
                  onChange={(e) => handleUserInput(e)}
                />
              </div>
            );
          })}
      </div>
    </section>
  );
}
