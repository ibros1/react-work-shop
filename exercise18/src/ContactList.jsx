import { useContext } from "react";
import ContactContext from "./ContactContext";

const ContactList = ({ setEditContact }) => {
  const { state, dispatch } = useContext(ContactContext);
  const handleEdit = (editContact) => {
    setEditContact(editContact);
  };
  const handleFavorite = (id) => {
    dispatch({
      type: "toggle",
      payload: id,
    });
  };
  const handleDelete = (id) => {
    dispatch({
      type: "remove",
      payload: id,
    });
  };
  return (
    <div>
      <h1>Contact List</h1>
      {state.length > 0 ? (
        state.map((contact) => (
          <div className="" key={contact.id}>
            <li>
              {" "}
              {contact.name} {contact.isFavorate ? "👋" : ""}{" "}
            </li>
            <p>{contact.email}</p>
            <p>{contact.phone}</p>
            <button onClick={() => handleEdit(contact)}>edit</button>
            <button onClick={() => handleFavorite(contact.id)}>
              {contact.isFavorate ? "unFavorate" : "favorite"}
            </button>
            <button onClick={() => handleDelete(contact.id)}>Delete</button>
          </div>
        ))
      ) : (
        <p>no contact list found yet!</p>
      )}
    </div>
  );
};

export default ContactList;
