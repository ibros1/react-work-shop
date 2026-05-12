import ToggleLanguageContext from "./langContext";
import { useState } from "react";
import LanguageComponet from "./languageComponet";
const App = () => {
  const [language, setLanguage] = useState("english");
  const handleLang = () => {
    setLanguage((prev) => (prev === "english" ? "spanish" : "english"));
  };
  return (
    <div>
      <ToggleLanguageContext value={language}>
        <button onClick={handleLang}>
          Change to {language === "english" ? "spanish" : "english"}{" "}
        </button>
        <LanguageComponet />
      </ToggleLanguageContext>
    </div>
  );
};

export default App;
