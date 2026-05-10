import { useState } from "react";

const App = () => {
  const [isLoggedIn, setIsLoggedin] = useState(false);
  const [user, setUser] = useState({});

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    setUser({
      username,
      password,
    });

    setIsLoggedin(true);
  };

  const handleLogout = () => {
    setUser({});
    setIsLoggedin(false);
  };

  return (
    <div className="">
      {!isLoggedIn ? (
        <div className="">
          <input
            onChange={(e) => setUsername(e.target.value)}
            type="text"
            placeholder="Username"
            name=""
            id=""
            required
          />{" "}
          <br />
          <input
            onChange={(e) => setPassword(e.target.value)}
            type="text"
            placeholder="Password"
            name=""
            id=""
            required
          />{" "}
          <br />
          <button onClick={handleLogin}>Login</button>
        </div>
      ) : (
        <div className="">
          <h2>Welcome back {user.username}! </h2>

          <button onClick={handleLogout}>Logout</button>
        </div>
      )}
    </div>
  );
};

export default App;
