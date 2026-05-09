import { useEffect } from "react";
import { useState } from "react";

const App = () => {
  const [user, setUser] = useState();
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  useEffect(() => {
    if (error) {
      throw new error(error);
    }
  }, [error]);

  const handleSearch = () => {
    const fetchUser = async () => {
      try {
        setLoading(true);
        setError("");
        await new Promise((promise) => setTimeout(promise, 1000));
        const res = await fetch(`https://api.github.com/users/${name}`);
        setLoading(false);
        const data = await res.json();
        setUser(data);
      } catch (error) {
        console.error(error);
        setError(error);
      }
    };

    fetchUser();
  };

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <h1>Github repository Search</h1>
      <input
        onChange={(e) => setName(e.target.value)}
        type="text"
        name=""
        id=""
      />
      <button onClick={handleSearch}>Search</button>
      {user && (
        <div className="">
          <h2>
            {user?.name} @{user?.login}
          </h2>
          <img
            style={{
              width: "80px",
            }}
            src={user?.avatar_url}
            alt=""
          />
          <p>Location: N/A</p>
          <p>Public Repos: {user?.public_repos}</p>
        </div>
      )}
    </div>
  );
};

export default App;
