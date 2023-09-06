import React, { useEffect, useState } from 'react';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Fetch data from the backend API when the component mounts
    fetch('http://localhost:8080/api/data')
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      <h1>Data from Backend</h1>
      <ul>
        {data.map((item) => (
          <li key={item.ssn}>
            Name: {item.fname}, id: {item.ssn}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;