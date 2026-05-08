import { useEffect, useState } from "react";

const App = () => {
  const [name, setName] = useState("back!");
  const [greeting, setGreeting] = useState("Welcome");

  useEffect(() => {
    document.title = `${greeting} ${name}`;
  }, [name, greeting]);

  return (
    <div>
      <h2>Enter your name</h2>
      <input
        onChange={(e) => setName(e.target.value)}
        value={name}
        type="text"
      />

      <h2>Choose a greeting</h2>
      <input
        onChange={(e) => setGreeting(e.target.value)}
        value={greeting}
        type="text"
      />
    </div>
  );
};

export default App;
