
import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [namee, setNamee] =useState("");
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [user, setUser] = useState([]);

  const add = () => {
    setUser([...user, { namee, number, email, city }]);
    setNamee("");
    setNumber("");
    setEmail("");
    setCity("");
  };

  return (
    <div className="app">
      <div className="main">
        <div className="input">
          <input type="text" placeholder="Enter Name" required value={namee} onChange={(e) => setNamee(e.target.value)} />
          <input type="number" placeholder="Enter Number" required value={number} onChange={(e) => setNumber(e.target.value)} />
          <input type="email" placeholder="Enter Email" required value={email} onChange={(e) => setEmail(e.target.value)} />
          <input type="text" placeholder="Enter City" value={city} onChange={(e) => setCity(e.target.value)} />
          <button onClick={add}>Add</button>
        </div>
      </div>

      <section>
        <table>
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Number</th>
              <th>E-mail</th>
              <th>City</th>
            </tr>
          </thead>
          <tbody>
            {user.map((item, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{item.namee}</td>
                <td>{item.number}</td>
                <td>{item.email}</td>
                <td>{item.city}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default App;
