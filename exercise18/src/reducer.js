export const initialState = [];

export const reducer = (state, action) => {
  switch (action.type) {
    case "add":
      return [...state, action.payload];
    case "toggle":
      return state.map((contact) =>
        contact.id == action.payload
          ? { ...contact, isFavorate: !contact.isFavorate }
          : contact,
      );

    case "edit":
      return state.map((contact) =>
        contact.id == action.payload.id ? action.payload : contact,
      );

    case "remove":
      return state.filter((contact) => contact.id != action.payload);

    default:
      return state;
  }
};
