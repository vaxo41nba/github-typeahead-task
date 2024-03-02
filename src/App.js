import { useEffect, useState } from "react";
import "./App.css";

import Card from "./components/Card";
import Header from "./components/Header";

function App() {
  const [usersData, setUsersData] = useState([]);

  useEffect(() => {
    fetch("https://api.github.com/users")
      .then((res) => res.json())
      .then((data) => setUsersData(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="App">
      <Header />

      <hr />

      <div className="cards-container">
        {usersData?.map((c) => (
          <Card
            key={c.id}
            avatar_url={c.avatar_url}
            login={c.login}
            html_url={c.html_url}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
