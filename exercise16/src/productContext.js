import { createContext } from "react";

const ProductContext = createContext([
  {
    id: 1,
    title: "iPhone 12 pro max",
    price: "300",
  },
  {
    id: 2,
    title: "iPad pro 2025",
    price: "900",
  },
]);

export default ProductContext;
