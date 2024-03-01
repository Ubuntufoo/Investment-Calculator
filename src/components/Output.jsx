// a child component of a table displaying the results of the user's
// investment data. It will receive data from App.jsx and display it to the user.

export default function Output({ outputData }) {
  return (
    <section>
      <table id="result">
        <thead>
          <tr>
            <th>Year</th>
            <th>Interest</th>
            <th>Value at Year End</th>
            <th>Annual Investment</th>
          </tr>
        </thead>
        <tbody>
          {outputData.map((rowData) => (
            <tr key={rowData.year}>
              <td>{rowData.year}</td>
              <td>{rowData.interest}</td>
              <td>{rowData.valueEndOfYear}</td>
              <td>{rowData.annualInvestment}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}
