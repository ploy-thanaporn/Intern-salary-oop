import "./App.css";

import { CEO, Junior, Manager, Senior } from "./Employee";

function App() {
  const ceo = new CEO("CEO", 25000, 3);
  const junior = new Junior("Junior", 25000, 2);
  const senior = new Senior("Senior", 25000, 3);
  const manager = new Manager("Manager", 25000, 3);

  // new Employee(new CEOSalary("g", 20000, "CEO"));

  return (
    <div className="App">
      <h2>Salary Employee</h2>
      <div className="table">
        <table>
          <thead>
            <tr>
              <th>Position</th>
              <th>Salary</th>
              <th>Bonus</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{junior.getPosition()}</td>
              <td>{junior.getSalary().toLocaleString()} ฿</td>
              <td>{junior.getBonus().toLocaleString()} ฿</td>
            </tr>
            <tr>
              <td>{senior.getPosition()}</td>
              <td>{senior.getSalary().toLocaleString()} ฿</td>
              <td>{senior.getBonus().toLocaleString()} ฿</td>
            </tr>
            <tr>
              <td>{manager.getPosition()}</td>
              <td>{manager.getSalary().toLocaleString()} ฿</td>
              <td>{manager.getBonus().toLocaleString()} ฿</td>
            </tr>
            <tr>
              <td>{ceo.getPosition()}</td>
              <td>{ceo.getSalary().toLocaleString()} ฿</td>
              <td>{ceo.getBonus().toLocaleString()} ฿</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
