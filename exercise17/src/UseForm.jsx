import { useState } from "react";

const UseForm = (initialValue) => {
  const [data, setData] = useState(initialValue);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };
  return { data, handleChange };
};

export default UseForm;
