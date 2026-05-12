import { useContext } from "react";
import ToggleLanguageContext from "./langContext";

const LanguageComponet = () => {
  const language = useContext(ToggleLanguageContext);

  return <div>{language === "english" ? "Hello" : "!Hola"}</div>;
};

export default LanguageComponet;
