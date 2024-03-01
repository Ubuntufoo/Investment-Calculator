// a child component of a table displaying the results of the user's
// investment data. It will receive data from App.jsx and display it to the user.

export default function Output({ outputData }) {
  return (
    <div>
      <table id='result'>
        <thead>
          <tr>
            <th>Year</th>
            <th>Interest</th>
            <th>Value at Year End</th>
            <th>Annual Investment</th>
          </tr>
        </thead>
        <tbody>
          {outputData.map((dataItem, index) => (
            <tr key={index}>
              <td>{dataItem.year}</td>
              <td>{dataItem.interest}</td>
              <td>{dataItem.valueEndOfYear}</td>
              <td>{dataItem.annualInvestment}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
