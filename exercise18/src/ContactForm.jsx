import { useContext, useEffect, useState } from "react";
import ContactContext from "./ContactContext";

const ContactForm = ({ editContact, setEditContact }) => {
  const { dispatch } = useContext(ContactContext);

  const [form, setForm] = useState({
    id: null,
    name: "",
    email: "",
    phone: "",
  });

  useEffect(() => {
    if (editContact) {
      setForm(editContact);
    }
  }, [editContact]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (editContact) {
      console.log(form);
      dispatch({
        type: "edit",
        payload: form,
      });

      setEditContact(null);
    } else {
      const newContact = {
        id: Date.now(),
        name: form.name,
        email: form.email,
        phone: form.phone,
        isFavorate: false,
      };

      dispatch({
        type: "add",
        payload: newContact,
      });
    }

    setForm({
      id: null,
      name: "",
      email: "",
      phone: "",
    });
  };

  return (
    <div>
      <h1>Contact Form</h1>

      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <br />

        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
        />

        <br />
        <br />

        <label>Email</label>
        <br />

        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
        />

        <br />
        <br />

        <label>Phone</label>
        <br />

        <input
          type="text"
          name="phone"
          value={form.phone}
          onChange={handleChange}
        />

        <br />
        <br />

        <button type="submit">
          {editContact ? "Edit Contact" : "Save Contact"}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
