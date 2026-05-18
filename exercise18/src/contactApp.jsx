import { useReducer } from "react";
import { initialState, reducer } from "./reducer";
import ContactContext from "./ContactContext";
import ContactForm from "./ContactForm";
import ContactList from "./ContactList";
import { useState } from "react";

const ContactApp = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [editContact, setEditContact] = useState("");
  console.log(state);
  return (
    <div>
      <ContactContext.Provider value={{ state, dispatch }}>
        {/* contact form */}
        <ContactForm
          editContact={editContact}
          setEditContact={setEditContact}
        />

        {/* contact list */}
        <ContactList setEditContact={setEditContact} />
      </ContactContext.Provider>
    </div>
  );
};

export default ContactApp;
